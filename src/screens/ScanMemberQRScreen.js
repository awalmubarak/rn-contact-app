

import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, TouchableOpacity, Dimensions } from 'react-native';
import * as Permissions from 'expo-permissions';
import { Ionicons } from '@expo/vector-icons'
import { BarCodeScanner } from 'expo-barcode-scanner';

const win = Dimensions.get('screen');

const ScanMemberQRScreen = ({navigation})=>{
    const [hasCameraPermission, setHasCameraPermission] = useState(null);

    const barcodeScanned = ({type, data})=>{
        navigation.navigate("Profile", {appTitle: "Member Profile"})
    }

    const didMount = async ()=>{
        const {status} = await Permissions.askAsync(Permissions.CAMERA);
        setHasCameraPermission(status === 'granted')
    }

    useEffect(() => {
       didMount()
    }, [])

    if(hasCameraPermission === null)return <Text>Requesting for Camera Permission</Text>
    if(hasCameraPermission === false)return <Text>No Access to Camera</Text>
    return <View style={styles.containerStyle}>
        <BarCodeScanner 
            onBarCodeScanned={barcodeScanned}
            style={styles.scannerStyle}
            // barCodeTypes={[BarCodeScanner.Constants.BarCodeType.qr]}
        />
  

        <View style={styles.topCameraActions}>
            <TouchableOpacity onPress={() => navigation.goBack()}>
                <Ionicons name="md-close" size={20} color="white"/>
            </TouchableOpacity>
        </View>

        <View style={styles.scannerBoxContainer}> 
            <Ionicons name="ios-qr-scanner" size={300} color="white" style={styles.scannerBox}/>
            <Text style={styles.qrScannerText}>Place QR Code Within Frame</Text>
        </View>
        <View style={styles.bottomCTAcontainer}>
            <Text>Want to share your contact?</Text>
            <TouchableOpacity style={styles.ctaButtonStyle} onPress={() => navigation.goBack()}>
                <Text style={styles.ctaButtonTextStyle}>Send QR</Text>
            </TouchableOpacity>
        </View>
    </View>
}

ScanMemberQRScreen.navigationOptions = ()=> {
    return {header: null}
  }

const styles = StyleSheet.create({
    containerStyle:{
        flex: 1
    },
    scannerStyle:{
        width: win.width,
        flex:1,
        position: "absolute",
        top: 0,
        bottom: 0
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
        alignItems: "center",
        backgroundColor: 'white'
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
    topCameraActions:{
        width: win.width,
        position: 'absolute',
        flexDirection: "row",
        justifyContent:"flex-end",
        right: 30,
        top: 50
    },
    scannerBoxContainer: {
        flexDirection: "column",
        flex: 1,
        top: 0,
        right: 0,
        left: 0,
        bottom: 0,
        marginHorizontal: 50,
        justifyContent: "center",
        opacity: 0.5
    },
    scannerBox:{
        top: -20
    },
    qrScannerText:{
        color: "white",
        top: -20,
        fontSize: 17,
        textAlign: "center"
    }
})

export default ScanMemberQRScreen;