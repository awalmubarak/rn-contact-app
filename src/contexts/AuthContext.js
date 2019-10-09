import React, {createContext, } from 'react'
import {useAsyncStorageReducer} from '../reducers/useAsyncStorageReducer'
import {reducer} from '../reducers/AuthReducer'

const AuthContext = createContext()

const AuthProvider = ({children})=>{
    const [state, dispatch] = useAsyncStorageReducer(reducer);
    console.log("context",state);
    

    return <AuthContext.Provider value={{state, dispatch}}>
        {children}
        </AuthContext.Provider>
}

export { AuthContext, AuthProvider}