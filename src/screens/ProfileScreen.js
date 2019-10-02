import React, {useContext} from 'react'
import { View, StyleSheet, Text, Image, TouchableOpacity, Linking } from 'react-native'
import { SimpleLineIcons, MaterialCommunityIcons, EvilIcons, Entypo } from '@expo/vector-icons'
import { AuthContext } from '../contexts/AuthContext'


const ProfileScreen = ({navigation})=>{
    const {state, dispatch} = useContext(AuthContext)
    let userInfo = state;
    const data = navigation.getParam('data');
    if(data && data.firstName && data.lastName && data.email && data.photo){
        userInfo = data;
    }
    return <View style={styles.container}>
        <View style={styles.userInfoContainer}>
            <Image source={{uri: userInfo.photo}} style={styles.userImageStyle}/>
            <View style={styles.userInfoStyle}>
                <Text style={styles.primaryTextStyle}>{userInfo.firstName} {userInfo.lastName}</Text>
                <Text style={styles.secondaryTextStyle}>Head of Marketing</Text>
            </View>
        </View>

        <View style={styles.socailContainer}>
            <TouchableOpacity onPress={()=>Linking.openURL(`https://twitter.com/${userInfo.twitter.substr(1)}`)}>
                <Entypo name="twitter-with-circle" size={30} color="#4c4d4f"/>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>Linking.openURL(`${userInfo.linkedIn}`)}>
                <Entypo name="linkedin-with-circle" size={30} color="#4c4d4f" style={{marginLeft:10}}/>
            </TouchableOpacity>
        </View>

        <View>
            <View style={styles.socailContainer}>
                <SimpleLineIcons name='phone' size={15} style={styles.contactIcon}/>
                <Text style={styles.contactInfoTextStyle}>{userInfo.phoneNumber}</Text>                
            </View>
            <View style={styles.socailContainer}>
                <MaterialCommunityIcons name='email-outline' size={15} style={styles.contactIcon}/>
                <Text style={styles.contactInfoTextStyle}>{userInfo.email}</Text>                
            </View>
            <View style={styles.socailContainer}>
                <EvilIcons name='location' size={15} style={styles.contactIcon}/>
                <Text style={styles.contactInfoTextStyle}>Medium Ray Galaxy</Text>                
            </View>
        </View>
    </View>
}

ProfileScreen.navigationOptions = ({navigation})=> {
    const appTitle = navigation.getParam('appTitle');
    return {
        title: appTitle
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
        alignSelf: "center",
        borderRadius: 25
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