import React, {useEffect,useState} from 'react';
import { TouchableOpacity, Image } from 'react-native'
import {createAppContainer, createSwitchNavigator} from 'react-navigation'
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
import AuthLoadingScreen from './src/screens/AuthLoadingScreen';
import { AuthProvider } from './src/contexts/AuthContext'
import NavigationService from './src/NavigationService';

const defaultConfigs = {
  defaultNavigationOptions: {
    title: "Contact App",
    headerStyle:{
      backgroundColor: "#fe2b4b"
    },
    headerTitleStyle:{
      color:"white",
    },
    headerTintColor: "white"
  },
  headerLayoutPreset: 'center'
}

const AppStack = createStackNavigator({
  HomeQRScreen:  HomeQRScreen,
  ScanMember: ScanMemberQRScreen,
  Profile: ProfileScreen
}, defaultConfigs)

const AuthStack = createStackNavigator({
  Welcome: WelcomeScreen,
  Walkthrough:WalkthroughScreen,
  SignIn: SignInScreen,
  Register: RegisterScreen,
}, defaultConfigs)


const navigator = createSwitchNavigator({
  AuthLoading: AuthLoadingScreen,
  Auth: AuthStack,
  App: AppStack
  
})


const App = createAppContainer(navigator);

const customTextProps = {
  style: {
    fontFamily: 'brown-otf',
    color: "#4c4d4f",
    fontSize: 15
  }
}

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
  return <AuthProvider>
          <App ref={appref=>{NavigationService.setTopLevelNavigator(appref)}}/>
        </AuthProvider>
}


export default Main;