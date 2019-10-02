import React, {useState, useContext} from 'react'
import { View, Text, StyleSheet, Image, Dimensions, KeyboardAvoidingView, TouchableOpacity } from 'react-native'
import FormInput from '../components/FormInput'
import OrientationLoadingOverlay from 'react-native-orientation-loading-overlay';
import { AuthContext } from '../contexts/AuthContext'

const win = Dimensions.get('screen')
const SignInScreen = ({navigation})=>{
    const {state, dispatch} = useContext(AuthContext)
    const [isSigingIn, setIsSigingIn] = useState(false)
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    return (
        <KeyboardAvoidingView behavior="padding" style={styles.container}>
                <Image source={require('../../assets/login.jpg')} style={styles.imageStyle}/>
                <View style={styles.bodyStyle}>
                    <View>
                        <FormInput style={styles.formInputStyle} 
                            label="Email"
                            placeholder="john.smith@mail.com"
                            value={email} onchange={setEmail}
                        />
                        <FormInput
                            label="Password"
                            placeholder="******"
                            secure={true}
                            value={password} onchange={setPassword}
                        />
                        <TouchableOpacity  style={styles.signInButton} 
                            onPress={()=>{
                                setIsSigingIn(true);
                                dispatch({type:"dummy", payload: setIsSigingIn})
                                navigation.navigate("HomeQRScreen", {});
                            }}>
                            <Text style={styles.signInButtonText}>SIGN IN</Text>
                        </TouchableOpacity>
                    </View>

                    <View style={styles.resetPassword}>
                        <Text>Forgot? </Text>
                        <TouchableOpacity >
                            <Text style={styles.resetText}>Reset Password</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <OrientationLoadingOverlay
                    visible={isSigingIn}
                    color="white"
                    indicatorSize="large"
                    messageFontSize={16}
                    message="SIGING IN..."
                    />
        </KeyboardAvoidingView>
    )
}

SignInScreen.navigationOptions = ()=> {
    return {
        title: "Sign In"
    }
  }

const styles = StyleSheet.create({
    container:{
        flex:1
    },
    imageStyle: {
        width: win.width,
        flex: 0.35,
        resizeMode: "cover"
    },
    formInputStyle:{
        borderBottomColor: "#b8b8b8",
        borderBottomWidth: 1
    },
    signInButton:{
        marginTop: 5,
        height: 45,
        backgroundColor: '#fe2b4b',
        borderRadius: 4,
        flexDirection: "row",
        alignItems: "center"
    },
    signInButtonText:{
        color: "white",
        fontWeight: "bold",
        textAlign: "center",
        letterSpacing: 2,
        width: "100%"
    },
    resetPassword:{
        flexDirection: "row",
        justifyContent: "flex-start",
        marginVertical: 20
    },
    resetText:{
        borderBottomColor: "#c15737",
        borderBottomWidth: 1
    },
    bodyStyle:{
        flex: 0.65,
        justifyContent:"center",
        marginHorizontal: 15
    }
})

export default SignInScreen;