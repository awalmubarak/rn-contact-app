import React from 'react'
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native'
import ampersandLogo from '../../assets/ampersand.png'

const WelcomeScreen = ({navigation})=>{
    return (
        <View style={styles.containerStyle}>
            <Image source={require('../../assets/ampersand.png')} style={styles.imageStyle}/>
            <Text style={styles.appName}>AMPERSAND {"\n"} CONTACTS</Text>
            <TouchableOpacity onPress={()=>navigation.navigate('Walkthrough')}>
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
        width: 200,
        height: 50,
        resizeMode: "contain"
    },
    appName: {
        fontSize: 20,
        letterSpacing: 3,
        textAlign: "center"
    },
    startedButton:{
        borderBottomColor: "#c15737",
        borderBottomWidth: 1,
    }
})

export default WelcomeScreen;