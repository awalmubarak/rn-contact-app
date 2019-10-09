import React, {useContext} from 'react'
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native'
import { AuthContext } from '../contexts/AuthContext'

const HomeQRScreen = ({navigation})=>{
    const {state, dispatch} = useContext(AuthContext)
    
    const uri = `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${JSON.stringify(state)}`
    
    return <View style={styles.containerStyle}>
        <View style={styles.contentStyle}>
            <View style={styles.introTextContainer}>
                <Text style={styles.primaryTextStyle}>Exchange Contact Information</Text>
                <Text style={styles.secondaryTextStyle}>Scan this QR below to share your contact</Text>
            </View>

            <View style={styles.qrImageContainer}>
                <Image source={{uri}} style={styles.qrImageStyle}/>
            </View>

            <View style={styles.userInfoContainer}>
                <Image source={{uri:state.photo}} style={styles.userImageStyle}/>
                <View style={styles.userInfoStyle}>
                    <Text style={styles.primaryTextStyle}>{state.firstName} {state.lastName}</Text>
                    <Text style={styles.secondaryTextStyle}>Head of Marketing</Text>
                </View>
            </View>
        </View>

        <View style={styles.bottomCTAcontainer}>
            <Text>Want to add a new connection?</Text>
            <TouchableOpacity style={styles.ctaButtonStyle} onPress={()=>navigation.navigate('ScanMember')}>
                <Text style={styles.ctaButtonTextStyle}>Scan QR</Text>
            </TouchableOpacity>
        </View>
    </View>
}

HomeQRScreen.navigationOptions =({navigation})=> {
    return {
        title: "Ampersand",
        headerRight: <TouchableOpacity onPress={()=>navigation.navigate('Profile', {appTitle: "My Profile"})}>
    <Image source={require('../../assets/nav-icon.png')} style={styles.navIconStyle}/>
  </TouchableOpacity>
        }
  }

const styles = StyleSheet.create({
    containerStyle:{
        flex: 1
    },
    contentStyle:{
        flex:0.8,
        justifyContent: "space-around",
        paddingHorizontal: 40,
    },
    introTextContainer:{

    },
    secondaryTextStyle: {
        color: 'grey',
        fontSize: 16
    },
    primaryTextStyle: {
        fontWeight: 'bold',
        fontSize: 16,
        marginBottom: 4
    },
    qrImageContainer:{
    },
    qrImageStyle:{
        width: 200,
        height: 200,
        alignSelf: "center"
    },
    userInfoContainer:{
        flexDirection: "row",
        justifyContent: "flex-start"
    },
    userInfoStyle:{
        marginLeft: 10
    },
    userImageStyle:{
        width: 30,
        height: 30,
        alignSelf: "center"
    },
    bottomCTAcontainer:{
        flex: 1,
        position: "absolute",
        bottom: 0,
        height: 50,
        borderTopColor: '#e6e6e6',
        borderTopWidth: 1,
        justifyContent: 'space-around',
        flexDirection: "row",
        right: 0,
        left: 0,
        alignItems: "center"
    },
    ctaButtonStyle:{
        borderColor: "#fe2b4b",
        borderWidth: 1,
        borderRadius: 3
    },
    ctaButtonTextStyle:{
        color: "#fe2b4b",
        paddingHorizontal: 10,
        paddingVertical: 2,
    },
    navIconStyle:{
        width:25, 
        height: 25, 
        marginRight:15
    }
})

export default HomeQRScreen;