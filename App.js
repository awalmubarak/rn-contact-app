import React from 'react';
import {createAppContainer} from 'react-navigation'
import {createStackNavigator} from 'react-navigation-stack'
import WelcomeScreen from './src/screens/WelcomeScreen'
import WalkthroughScreen from './src/screens/WalkthroughScreen';
import SignInScreen from './src/screens/SignInScreen';


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
  SignIn: SignInScreen
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