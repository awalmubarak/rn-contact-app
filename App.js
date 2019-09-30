import React, {useEffect,useState} from 'react';
import { TouchableOpacity, Image } from 'react-native'
import {createAppContainer} from 'react-navigation'
import {createStackNavigator} from 'react-navigation-stack'
import WelcomeScreen from './src/screens/WelcomeScreen'
import WalkthroughScreen from './src/screens/WalkthroughScreen';
import SignInScreen from './src/screens/SignInScreen';
import RegisterScreen from './src/screens/RegisterScreen';
import HomeQRScreen from './src/screens/HomeQRScreen';
import ScanMemberQRScreen from './src/screens/ScanMemberQRScreen';
import ProfileScreen from './src/screens/ProfileScreen';
import * as Font from 'expo-font';
import { setCustomText } from 'react-native-global-props'
import {AppLoading} from 'expo'


const customTextProps = {
  style: {
    fontFamily: 'brown-otf',
    color: "#4c4d4f",
    fontSize: 15
  }
}


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
  HomeQRScreen:  HomeQRScreen,
  ScanMember: {
    screen: ScanMemberQRScreen,
    navigationOptions:{
      header: null
    }
  },
  Profile: ProfileScreen
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


const App = createAppContainer(navigator);

const Main = ()=>{
  const [fontLoaded, setFontLoaded] = useState(false)
  const loadfont = async()=>{
    await Font.loadAsync({
      'brown-otf': require('./assets/fonts/brown.otf'),
    });
    setCustomText(customTextProps);
    setFontLoaded(true)
  }
  useEffect(() => {
    loadfont()
  }, []);
  if(fontLoaded===false)return <AppLoading/>;
  return <App/>
}


export default Main;