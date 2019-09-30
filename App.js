import React from 'react';
import { TouchableOpacity, Image } from 'react-native'
import {createAppContainer} from 'react-navigation'
import {createStackNavigator} from 'react-navigation-stack'
import WelcomeScreen from './src/screens/WelcomeScreen'
import WalkthroughScreen from './src/screens/WalkthroughScreen';
import SignInScreen from './src/screens/SignInScreen';
import RegisterScreen from './src/screens/RegisterScreen';
import HomeQRScreen from './src/screens/HomeQRScreen';


const navigator = createStackNavigator({
  Welcome: {
    screen: WelcomeScreen,
    navigationOptions: {
      header: null,
    },
  },
  Walkthrough: {
    screen: WalkthroughScreen,
    navigationOptions: {
      header: null,
    },
  },
  SignIn: SignInScreen,
  Register: RegisterScreen,
  HomeQRScreen: {
    screen: HomeQRScreen,
    navigationOptions:{
      headerRight: <TouchableOpacity>
        <Image source={require('./assets/nav-icon.png')} style={{width:25, height: 25, marginRight:15}}/>
      </TouchableOpacity>
    }
  }
}, {
  initialRouteName: "Welcome",
  defaultNavigationOptions: {
    title: "Contact App",
    headerStyle:{
      backgroundColor: "#fe2b4b"
    },
    headerTitleStyle:{
      color:"white"
    },
    headerTintColor: "white"
  }
})

export default createAppContainer(navigator);