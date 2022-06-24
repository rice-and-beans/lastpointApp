import React from 'react'
import { SafeAreaView, StatusBar } from 'react-native';
import ExibirQRCodePage from '../../components/templates/qrCode/ExibirQRCode'
import { GeraQrcodeAulaController } from '../../controllers/VisualizacaoQrCode/geraQrcodeAulaController';
import { useNavigation } from '@react-navigation/native';
import { useState, useEffect } from 'react';
import { SecurityConstants } from '../../constants/securityConstants';
import * as SecureStore from 'expo-secure-store';

export default function VisualizacaoQrCode() {

  const geraQrcodeAulaController = new GeraQrcodeAulaController();
  const [imagem, setImagem] = useState('');
  const navigation = useNavigation();

  async function gerarQrCode(){
    const usuarioCod = await SecureStore.getItemAsync(SecurityConstants.USUARIO_COD);
    const token = await SecureStore.getItemAsync(SecurityConstants.TOKEN_ACESSO);
    const aulaCod = await SecureStore.getItemAsync(SecurityConstants.AULA_COD);
    if(token){
      const retorno = await geraQrcodeAulaController.execute(token, usuarioCod, aulaCod);
      if(retorno){
        setImagem(retorno);
      }else{
        Alert.alert('Aviso:', "Não foi possível gerar o QrCode da aula atual!");
      }
    }else{
      navigateToLogin();
    }
  }

  useEffect(() => {
    const fetchData = async () => {
      await gerarQrCode();
    }
    fetchData().catch();
  }, [])

  function navigateToLogin(){
    navigation.navigate("Login");
  }

  function navigateToHistoricoAluno(){
    navigation.navigate("AulasProfessor");
  }

  return (
      <SafeAreaView style={{flex: 1, marginTop: StatusBar.currentHeight}}>
        <ExibirQRCodePage funcaoVoltar={voltar} 
                          funcaoAtualizar={atualizar}
                          imagemQrCode={imagem}>
        </ExibirQRCodePage>
      </SafeAreaView>
  )

  function voltar(){
    navigateToHistoricoAluno();
  }

  function atualizar(){
    gerarQrCode()
  }

}