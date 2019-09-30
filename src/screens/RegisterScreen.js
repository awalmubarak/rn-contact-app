import React from 'react'
import { View, Text, StyleSheet, Image, KeyboardAvoidingView, TouchableOpacity } from 'react-native'
import FormInput from '../components/FormInput'


const RegisterScreen = ({navigation})=>{
    return <KeyboardAvoidingView behavior="padding" style={styles.container}>
        <TouchableOpacity style={styles.iconContainer}>
            <Image source={require('../../assets/user.png')} style={styles.userIconStyle}/>
            <Text style={styles.profileText}>ADD PROFILE PHOTO</Text>
        </TouchableOpacity>
        <View style={styles.formContainer}>
            <FormInput style={styles.formInputStyle} 
                label="Full Name"
                placeholder="Joan Shay"
            />
            <FormInput style={styles.formInputStyle} 
                label="Email"
                placeholder="joan.shay@sparrow.com"
            />
            <FormInput style={styles.formInputStyle} 
                label="Phone Number"
                placeholder="+233 (244) 245 190"
            />
            <FormInput style={styles.formInputStyle} 
                label="Role"
                placeholder="Director of Marketing"
            />
            <FormInput style={styles.formInputStyle} 
                label="Twitter"
                placeholder="@joansays"
            />
            <FormInput style={styles.formInputStyle} 
                label="LinkedIn"
                placeholder="/joan.shay"
            />

            <TouchableOpacity  style={styles.signInButton} 
                onPress={()=>navigation.navigate("HomeQRScreen")}>
                <Text style={styles.signInButtonText}>REGISTER</Text>
            </TouchableOpacity>
        </View>
    </KeyboardAvoidingView>
}

const styles = StyleSheet.create({
    container:{
        flex: 1
    },
    userIconStyle:{
        width: 50,
        height: 50,
        alignSelf: "center"
    },
    iconContainer:{
        flex: 0.29,
        flexDirection: "column",
        justifyContent:"center",
        backgroundColor: "#f7f7f7"
    },
    formContainer:{
        flex:0.71,
        marginHorizontal: 15
    },
    profileText: {
        alignSelf: "center",
        color: "#fe2b4b",
        marginTop: 10
    },
    formInputStyle:{
        borderBottomColor: "#b8b8b8",
        borderBottomWidth: 1,
        marginVertical: 4
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
    }
})

export default RegisterScreen;