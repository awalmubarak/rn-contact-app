import { AsyncStorage } from 'react-native'
import authApi from '../AuthApi'
import NavigationService from '../NavigationService';

export const reducer = async(state, {type, payload})=>{
    switch (type) {
        case "sign_in":
            const SignInresponse = await authApi.post('/login', {
                    "email": payload.email,
                    "password": payload.password
                });

                if(SignInresponse.status==="200"){
                    await AsyncStorage.setItem("userInfo", JSON.stringify(SignInresponse.data));
                    NavigationService.navigate("App");
                    break;
                }
                return {loginError: SignInresponse.data}
                
        case "sign_up":
            const signUpresponse = await authApi.post('/register', {
                "email": payload.email,
                "password": payload.password,
                "firstName": payload.firstName,
                "lastName": payload.lastName,
                "photo": payload.photo,
                "phoneNumber": payload.phone,
                "twitter":payload.twitter,
                "linkedIn": payload.linkedIn,
                "website": payload.website
            })
            if(signUpresponse.status==="201"){
                await AsyncStorage.setItem("userInfo", JSON.stringify(signUpresponse.data));
                NavigationService.navigate("App");
            }
            return {registerError: signUpresponse.data.error}
        case "logout":
                await AsyncStorage.clear();
                NavigationService.navigate("Auth");  
                break;          
        default:
            break;
    }
}
