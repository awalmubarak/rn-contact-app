import React from 'react'
import { View, Text, Image, StyleSheet, Dimensions, TouchableOpacity } from 'react-native'

const win = Dimensions.get('window');

const WalkthroughScreen = ({ navigation })=>{
    return <View style={styles.container}>
        <Image source={require('../../assets/walkthrough.jpg')} style={styles.imageStyle}/>
        <View style={styles.inTouchContainer}>
            <Text style={styles.inTouch}>KEEP IN TOUCH WITH THE PEOPLE OF AMPERSAND</Text>
            <Text style={styles.signIn}>Sign in or register with your Ampersand email</Text>
        </View>
        <View style={styles.actionsContainer}>
            <TouchableOpacity>
                <Text style={styles.actions}>REGISTER</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>navigation.navigate('SignIn')}>
                <Text style={styles.actions}>SIGN IN</Text>
            </TouchableOpacity>
        </View>
    </View>
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        flexDirection: "column"
    },
    imageStyle: {
        width: win.width,
        flex: 0.7,
        resizeMode: "cover"
    },
    inTouchContainer:{
        marginHorizontal: 15,
        marginVertical: 20, 
    },
    inTouch:{
        fontSize: 18,
        marginVertical: 5
    },
    actions:{ 
        borderBottomColor: "#c15737",
        borderBottomWidth: 1,
    },
    actionsContainer:{
        marginTop: "auto",
        flexDirection: "row",
        justifyContent: "space-around",
        marginBottom: 50
    }

})

export default WalkthroughScreen;