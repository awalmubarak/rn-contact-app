import React, {useReducer} from 'react'
import { AsyncStorage } from 'react-native'

const getItem = async()=>{
    const info = await AsyncStorage.getItem('userInfo');
    return info;
}
const useAsyncStorageReducer = (reducer, initialState)=>{
    const [state, dispatch] = useReducer(reducer, initialState,()=>{
        let value;
        try {
            const info = getItem();
             value = JSON.parse(info);
        } catch (error) {
            value = initialState;
        }
        return value;
    });
    
    
    return [state, dispatch];
}

export {useAsyncStorageReducer};