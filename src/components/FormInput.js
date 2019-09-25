import React from 'react'
import {View, Text,TextInput, StyleSheet } from 'react-native'

const FormInput = ({style, label, placeholder, secure})=>{
    return <View style={[styles.inputContainer, style]}>
    <Text style={styles.inputLabel}>{label}</Text>
    <TextInput 
        style={styles.inputStyle}
        placeholder={placeholder}
        autoCapitalize="none"
        autoCorrect={false}
        secureTextEntry={secure?secure:false}
        />
</View>
}

const styles = StyleSheet.create({
    inputContainer: {
        flexDirection: "row",
        
    },
    inputStyle:{
        height: 40, 
        flexGrow: 1,
        textAlign: "right",
        fontSize: 15
    },
    inputLabel:{
        alignSelf: "center",
        fontSize: 15
    }
})

export default FormInput;