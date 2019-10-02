import { AsyncStorage } from 'react-native'
import authApi from '../AuthApi'
import NavigationService from '../NavigationService';


const setItem = async(data)=>{
    await AsyncStorage.setItem("userInfo", JSON.stringify(data));
}

const signUp = async(payload)=>{
    const res = await authApi.post('/register', {
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
    return res;
}

const signIn = async(payload)=>{
    const res = await authApi.post('/login', {
        "email": payload.email,
        "password": payload.password
    });
    return res;
}

const logout = async ()=>{
    await AsyncStorage.clear();
}

const reducer = (state, {type, payload})=>{
    switch (type) {
        case "sign_in":
            const SignInresponse = signIn(payload);

                if(SignInresponse.status==="200"){
                    setItem(SignInresponse.data)
                    NavigationService.navigate("App");
                    break;
                }
                return {loginError: SignInresponse.data}
                
        case "sign_up":
            const signUpresponse = signUp(payload);
            if(signUpresponse.status==="201"){
                setItem(signUpresponse.data)
                NavigationService.navigate("App");
            }
            return {registerError: signUpresponse.data.error}
        case "logout":
                logout()
                NavigationService.navigate("Auth");  
                break;  
        case 'dummy':
                const data = {
                    "email": "drew@ampersandllc.co",
                    "password": "yelL0w",
                    "firstName": "Drew",
                    "lastName": "Barnes",
                    "photo": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNk+P+/HgAFhAJ/wlseKgAAAABJRU5ErkJggg==",
                    "phoneNumber": "+233268187573",
                    "twitter": "@drew_brns",
                    "linkedIn": "https://www.linkedin.com/in/drew-barnes-81839938",
                    "website": "www.ampersandllc.co"
                }
                setItem(data);
                return data;
        default:
            break;
    }
}

export {reducer}
