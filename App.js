import React from 'react';
import {createAppContainer} from 'react-navigation'
import {createStackNavigator} from 'react-navigation-stack'
import WelcomeScreen from './src/screens/WelcomeScreen'


const navigator = createStackNavigator({
  Welcome: {
    screen: WelcomeScreen,
    navigationOptions: {
      header: null,
    },
  }
}, {
  initialRouteName: "Welcome",
  defaultNavigationOptions: {
    title: "Contact App"
  }
})

export default createAppContainer(navigator);