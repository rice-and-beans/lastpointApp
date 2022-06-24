import React from 'react'
import { SafeAreaView, StatusBar } from 'react-native';
import ScannerQrCodePage from '../../components/templates/qrCode/ScannerQrCode';
import { useNavigation } from '@react-navigation/native';
import { RealizaChamadaQrCodeController } from '../../controllers/ScannerQrCode/realizaChamadaQrCodeController';

export default function ScannerQrCode() {

  const realizaChamadaQrCodeController = new RealizaChamadaQrCodeController();

  const navigation = useNavigation();
  function navigateToHistoricoAluno(){
    navigation.navigate("AulasAluno");
  }

  function voltar(){
    navigateToHistoricoAluno();
  }

  function atualizar(){}

  return (
      <SafeAreaView style={{flex: 1, marginTop: StatusBar.currentHeight}}>
        <ScannerQrCodePage  funcaoVoltar={voltar} funcaoAtualizar={atualizar} ></ScannerQrCodePage>
      </SafeAreaView>
  )

}