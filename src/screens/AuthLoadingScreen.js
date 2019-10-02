import React, {useEffect} from 'react'
import { ActivityIndicator, AsyncStorage, View, StatusBar } from 'react-native'

const AuthLoadingScreen = ({navigation})=>{

    const checkAuthStatus = async()=>{
        const user = await AsyncStorage.getItem('userInfo');
        return user;
    }

    useEffect(() => {
        const user = checkAuthStatus()
        if(user && user.firstName && user.lastName){
          navigation.navigate("App")
        }else{
          navigation.navigate("Auth")
        }
    })

    return (
        <View>
          <ActivityIndicator />
          <StatusBar barStyle="default" />
        </View>
      );
}

export default AuthLoadingScreen;