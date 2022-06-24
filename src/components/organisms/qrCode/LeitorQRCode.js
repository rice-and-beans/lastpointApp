import { React, useEffect, useState } from 'react';
import { Button, Dimensions, StyleSheet, Text, View } from 'react-native';
import { BarCodeScanner } from 'expo-barcode-scanner';
import BarcodeMask from 'react-native-barcode-mask';
import { Alert } from "react-native";
import { SecurityConstants } from '../../../constants/securityConstants';
import * as SecureStore from 'expo-secure-store';
import { RealizaChamadaQrCodeController } from '../../../controllers/ScannerQrCode/realizaChamadaQrCodeController';

const finderWidth = 300
const finderHeight = 300
const width = Dimensions.get('window').width
const height = Dimensions.get('window').height
const viewMinX = (width - finderWidth) / 2
const viewMinY = (height - finderHeight) / 2

export default function LeitorQRCode(props) {

  const realizaChamadaQrCodeController = new RealizaChamadaQrCodeController();
  const [hasPermission, setHasPermission] = useState(null)
  const [type, setType] = useState(BarCodeScanner.Constants.Type.back)
  const [scanned, setScanned] = useState(false)

  useEffect(() => {
    (async () => {
      const {status} = await BarCodeScanner.requestPermissionsAsync()
      setHasPermission(status === 'granted')
    })()
  }, [])
  
    const handleBarCodeScanned = async (scanningResult) =>  {
      if (!scanned) {
        const {type, data, bounds: {origin} = {}} = scanningResult
        const {x, y} = origin
        if (x >= viewMinX && y >= viewMinY && x <= (viewMinX + finderWidth / 2) && y <= (viewMinY + finderHeight / 2)) {
          setScanned(true)
          await realizarChamada(data);
        }
      }
    };

    if (hasPermission === null) {
      return <Text>Requesting for camera permission</Text>;
    }
    if (hasPermission === false) {
      return <Text>No access to camera</Text>;
    }

    function navigateToLogin(){
      navigation.navigate("Login");
    }

    async function realizarChamada(data){
      var usuarioCod = null;
      usuarioCod = await SecureStore.getItemAsync(SecurityConstants.USUARIO_COD);
      var token = null;
      token = await SecureStore.getItemAsync(SecurityConstants.TOKEN_ACESSO);
      if(token){
        if(data){
          try {
            const retorno = await realizaChamadaQrCodeController.execute(token, usuarioCod, data.toString());
            
            if(retorno && retorno == 200){
              Alert.alert('Aviso:', "Chamada realizada!");
            }else if(retorno){
              Alert.alert('Aviso:', retorno);
            }else{
              Alert.alert('Aviso:', 'Algo deu errado!');
            }

          } catch (error) {
            Alert.alert('Aviso:',"QrCode inválido!");
          }
        }else{
          Alert.alert('Aviso:',"QrCode inválido!");
        }
      }else{
        navigateToLogin();
      }
    }

    return (
      <View >
        <BarCodeScanner onBarCodeScanned={handleBarCodeScanned}
          type={type}
          barCodeTypes={[BarCodeScanner.Constants.BarCodeType.qr]}
          style={[styles.container]}>
        
        <BarcodeMask edgeColor="#41A05E" height={300} width={300} showAnimatedLine/>
          {scanned && <Button title="Scan Again" color="#41A05E" onPress={() => setScanned(false)}/>}
        </BarCodeScanner>
      </View>
    )
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 20,
    width: '90%',
    height: '91%',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  }
})