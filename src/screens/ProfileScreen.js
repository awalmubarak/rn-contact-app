import React from 'react'
import { View, StyleSheet, Text, Image } from 'react-native'
import { SimpleLineIcons, MaterialCommunityIcons, EvilIcons, Entypo } from '@expo/vector-icons'

const ProfileScreen = ()=>{
    return <View style={styles.container}>
        <View style={styles.userInfoContainer}>
            <Image source={require('../../assets/user.png')} style={styles.userImageStyle}/>
            <View style={styles.userInfoStyle}>
                <Text style={styles.primaryTextStyle}>Joan Shay</Text>
                <Text style={styles.secondaryTextStyle}>Head of Marketing</Text>
            </View>
        </View>

        <View style={styles.socailContainer}>
            <Entypo name="twitter-with-circle" size={30} color="#4c4d4f"/>
            <Entypo name="linkedin-with-circle" size={30} color="#4c4d4f" style={{marginLeft:10}}/>
        </View>

        <View>
            <View style={styles.socailContainer}>
                <SimpleLineIcons name='phone' size={15} style={styles.contactIcon}/>
                <Text style={styles.contactInfoTextStyle}>+233 (245) 223 4543</Text>                
            </View>
            <View style={styles.socailContainer}>
                <MaterialCommunityIcons name='email-outline' size={15} style={styles.contactIcon}/>
                <Text style={styles.contactInfoTextStyle}>joan@amperlocasa.co</Text>                
            </View>
            <View style={styles.socailContainer}>
                <EvilIcons name='location' size={15} style={styles.contactIcon}/>
                <Text style={styles.contactInfoTextStyle}>Medium Ray Galaxy</Text>                
            </View>
        </View>
    </View>
}

ProfileScreen.navigationOptions = ({appTitle})=> {
    return {
        title: appTitle ? appTitle : "My Profile"
    }
}


const styles = StyleSheet.create({
    container:{
        flex: 1,
        marginHorizontal: 20
    },
    userInfoContainer:{
        flexDirection: "row",
        justifyContent: "flex-start",
        marginTop: 50,
        marginBottom: 20
    },
    userInfoStyle:{
        marginLeft: 10
    },
    userImageStyle:{
        width: 50,
        height: 50,
        alignSelf: "center"
    },
    secondaryTextStyle: {
        color: 'grey',
        fontSize: 16, 
    },
    primaryTextStyle: {
        fontWeight: 'bold',
        fontSize: 16,
        marginBottom: 4,
    },
    socailContainer:{
        flexDirection: "row",
        justifyContent: "flex-start",
        marginVertical: 10
    },
    contactInfoTextStyle:{
        marginLeft: 10,
    },
    contactIcon:{
        alignSelf: "center"
    }
})

export default ProfileScreen;