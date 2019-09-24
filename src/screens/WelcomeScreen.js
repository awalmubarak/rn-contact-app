import React from 'react'
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native'
import ampersandLogo from '../../assets/ampersand.png'

const WelcomeScreen = ()=>{
    return (
        <View style={styles.containerStyle}>
            <Image source={require('../../assets/ampersand.png')} style={styles.imageStyle}/>
            <Text style={styles.appName}>AMPERSAND {"\n"} CONTACTS</Text>
            <TouchableOpacity>
                <Text style={styles.startedButton}>GET STARTED</Text>
            </TouchableOpacity>
        </View>
    )
}


const styles = StyleSheet.create({
    containerStyle: {
        flex: 1,
        flexDirection: "column",
        justifyContent: "space-around",
        alignItems: "center",
        backgroundColor: "#f4f4f0"
    },
    imageStyle: {
        width: 300,
        height: 100,
        resizeMode: "contain"
    },
    appName: {
        fontSize: 20,
    },
    startedButton:{
        borderBottomColor: "#c15737",
        borderBottomWidth: 1,
    }
})

export default WelcomeScreen;