import React, {useReducer} from 'react'
import { AsyncStorage } from 'react-native'

const useAsyncStorageReducer = (reducer, initialState=null)=>{
    const getItem = async()=>{
        const info = await AsyncStorage.getItem('userInfo');
        return info;
    }
    const [state, dispatch] = useReducer(reducer, initialState,()=>{
        try {
            const info = getItem();
            const data = JSON.parse(info);
            return data;  
        } catch (error) {
            console.log(error);
        }
        return null;
    });
    console.log(state);
    
    return [state, dispatch];
}

export {useAsyncStorageReducer};