

import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, Button, TouchableOpacity, Dimensions } from 'react-native';
import Constants from 'expo-constants';
import * as Permissions from 'expo-permissions';

import { BarCodeScanner } from 'expo-barcode-scanner';


const ScanMemberQRScreen = ()=>{
    const [hasCameraPermission, setHasCameraPermission] = useState(null);
    const [scanned, setScanned] = useState(false)

    const barcodeScanned = ({type, data})=>{
        setScanned(true)
        alert(`Bar code with type ${type} and data ${data} has been scanned!`);
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
        />
       
        <View style={styles.bottomCTAcontainer}>
            <Text style={styles.ctaMessageStyle}>Want to share your contact?</Text>
            <TouchableOpacity style={styles.ctaButtonStyle} onPress={() => setScanned(false)}>
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
        width: Dimensions.get('screen').width,
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
    ctaMessageStyle:{

    }
})

export default ScanMemberQRScreen;

// export default class ScanMemberQRScreen extends React.Component {
//   state = {
//     hasCameraPermission: null,
//     scanned: false,
//   };

//   async componentDidMount() {
//     this.getPermissionsAsync();
//   }

//   getPermissionsAsync = async () => {
//     const { status } = await Permissions.askAsync(Permissions.CAMERA);
//     this.setState({ hasCameraPermission: status === 'granted' });
//   };

//   render() {
//     const { hasCameraPermission, scanned } = this.state;

//     if (hasCameraPermission === null) {
//       return <Text>Requesting for camera permission</Text>;
//     }
//     if (hasCameraPermission === false) {
//       return <Text>No access to camera</Text>;
//     }
//     return (
//       <View
//         style={{
//           flex: 1,
//           flexDirection: 'column',
//           justifyContent: 'flex-end',
//         }}>
//         <BarCodeScanner
//           onBarCodeScanned={scanned ? undefined : this.handleBarCodeScanned}
//           style={StyleSheet.absoluteFillObject}
//         />

//         {scanned && (
//           <Button title={'Tap to Scan Again'} onPress={() => this.setState({ scanned: false })} />
//         )}
//       </View>
//     );
//   }

//   handleBarCodeScanned = ({ type, data }) => {
//     this.setState({ scanned: true });
//     alert(`Bar code with type ${type} and data ${data} has been scanned!`);
//   };
// }