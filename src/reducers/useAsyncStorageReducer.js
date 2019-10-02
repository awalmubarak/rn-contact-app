import React, {useReducer} from 'react'
import { AsyncStorage } from 'react-native'
const useAsyncStorageReducer = (reducer, initialState=null)=>{
    
    const [state, dispatch] = useReducer(reducer, initialState, async ()=>{
        try {
            const info = await AsyncStorage.getItem('userInfo');
            if(info)return JSON.parse(info);            
        } catch (error) {
            console.log(error);
        }
        return null;
    });
    return [state, dispatch];
}

export default useAsyncStorageReducer;