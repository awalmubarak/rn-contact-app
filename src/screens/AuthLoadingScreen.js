import React, {useEffect} from 'react'
import { ActivityIndicator, AsyncStorage, View, StatusBar } from 'react-native'

const AuthLoadingScreen = ({navigation})=>{

    const checkAuthStatus = async()=>{
        const token = await AsyncStorage.getItem('token');
        navigation.navigate(token? "App" : "Auth")
    }

    useEffect(() => {
        checkAuthStatus()
    })

    return (
        <View>
          <ActivityIndicator />
          <StatusBar barStyle="default" />
        </View>
      );
}

export default AuthLoadingScreen;