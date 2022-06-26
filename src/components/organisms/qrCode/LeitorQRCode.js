import { React, useEffect, useState } from 'react';
import { Button, Dimensions, StyleSheet, Text, View } from 'react-native';
import { BarCodeScanner } from 'expo-barcode-scanner';
import BarcodeMask from 'react-native-barcode-mask';
import { Alert } from "react-native";
import { SecurityConstants } from '../../../constants/securityConstants';
import * as SecureStore from 'expo-secure-store';
import { RealizaChamadaQrCodeController } from '../../../controllers/ScannerQrCode/realizaChamadaQrCodeController';

const localizadorLargura = 300
const localizadorAltura = 300
const width = Dimensions.get('window').width
const height = Dimensions.get('window').height
const telaMinX = (width - localizadorLargura) / 2
const telaMinY = (height - localizadorAltura) / 2

export default function LeitorQRCode(props) {

  const realizaChamadaQrCodeController = new RealizaChamadaQrCodeController();
  const [temPermissao, setTemPermissao] = useState(null)
  const [tipo, setTipo] = useState(BarCodeScanner.Constants.Type.back)
  const [scanned, setScanned] = useState(false)

  useEffect(() => {(
    async () => {
      const {status} = await BarCodeScanner.requestPermissionsAsync()
      setTemPermissao(status === 'granted')
    })()
  }, [])

  function navigateToLogin(){
    navigation.navigate("Login");
  }
  
  const tratamentoBarCodeScanned = async (resultadoScanner) =>  {
    if (!scanned) {
      const {
        tipo, 
        data, 
        bounds: {origin} = {}
      } = resultadoScanner

      const {x, y} = origin
      if (x >= telaMinX && y >= telaMinY && x <= (telaMinX + localizadorLargura / 2) && y <= (telaMinY + localizadorAltura / 2)) {
        setScanned(true)
        await realizarChamada(data);
      }
    }
  };

  if (temPermissao === null) {
    return <Text>O app precisa de permissão para acessar a câmera</Text>;
  }

  if (temPermissao === false) {
    return <Text>Sem acesso a câmera</Text>;
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
      <BarCodeScanner onBarCodeScanned={tratamentoBarCodeScanned}
                      type={tipo}
                      barCodetipos={[
                        BarCodeScanner.Constants.BarCodeType.qr
                      ]}
                      style={[styles.container]}>

      <BarcodeMask edgeColor="#41A05E" 
                   height={300} 
                   width={300}
                   showAnimatedLine/>
        {scanned && <Button title="Escanear novamente" 
                            color="#41A05E" 
                            onPress={() => setScanned(false)}/>}
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