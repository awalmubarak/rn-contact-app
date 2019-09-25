import React from 'react';
import {createAppContainer} from 'react-navigation'
import {createStackNavigator} from 'react-navigation-stack'
import WelcomeScreen from './src/screens/WelcomeScreen'
import WalkthroughScreen from './src/screens/WalkthroughScreen';


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
}, {
  initialRouteName: "Welcome",
  defaultNavigationOptions: {
    title: "Contact App"
  }
})

export default createAppContainer(navigator);