import React from 'react'
import { View, Text, StyleSheet, Image, Dimensions, KeyboardAvoidingView, TouchableOpacity } from 'react-native'
import FormInput from '../components/FormInput'

const win = Dimensions.get('screen')
const SignInScreen = ()=>{
    return (
        <KeyboardAvoidingView behavior="padding" style={styles.container}>
                <Image source={require('../../assets/login.jpg')} style={styles.imageStyle}/>
                <View style={styles.bodyStyle}>
                    <View>
                        <FormInput style={styles.formInputStyle} 
                            label="Email"
                            placeholder="john.smith@mail.com"
                        />
                        <FormInput
                            label="Password"
                            placeholder="******"
                            secure={true}
                        />
                        <TouchableOpacity  style={styles.signInButton}>
                            <Text style={styles.signInButtonText}>SIGN IN</Text>
                        </TouchableOpacity>
                    </View>

                    <View style={styles.resetPassword}>
                        <Text>Forgot? </Text>
                        <TouchableOpacity>
                            <Text style={styles.resetText}>Reset Password</Text>
                        </TouchableOpacity>
                    </View>
                </View>
        </KeyboardAvoidingView>
    )
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
        fontSize: 15,
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