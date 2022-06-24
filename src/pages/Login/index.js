import React from 'react';
import { View } from 'react-native';
import LoginPage from '../../components/templates/login/LoginPage';
import * as SecureStore from 'expo-secure-store';
import { SecurityConstants } from "../../constants/securityConstants";
import { useNavigation } from '@react-navigation/native';
import { Alert } from "react-native";
import { useState, useEffect } from 'react';
import { GerarTokenUsuarioController } from '../../controllers/Login/gerarTokenUsuarioController';
import { BuscarUsuarioPorEmailController } from '../../controllers/Login/buscaUsuarioPorEmailController';

export default function Login() {

  const [login, setLogin] = useState('');
  const [senha, setSenha] = useState('');
  
  const navigation = useNavigation();
  const gerarTokenUsuarioController = new GerarTokenUsuarioController();
  const buscarUsuarioPorEmailController = new BuscarUsuarioPorEmailController();
  
  useEffect(()=> {carregaInicial()}, []);
  
  return (
    <View>
      <LoginPage 
          onClickFunc={logar}
          setLogin={setLogin}
          textLogin={login}
          textSenha={senha} 
          setSenha={setSenha}/>
    </View>
  );

  async function logar(){
    var retorno;
    try {
      retorno = await gerarTokenUsuarioController.execute(login, senha);
      if(retorno){
        const usuario = await buscarUsuarioPorEmailController.execute(login);
        if(usuario && usuario.tipo){
          await SecureStore.setItemAsync(SecurityConstants.TOKEN_ACESSO, retorno);
          await SecureStore.setItemAsync(SecurityConstants.TIPO_USUARIO, (usuario.tipo).toString());
          await SecureStore.setItemAsync(SecurityConstants.USUARIO_COD, (usuario.codigo).toString());
          trocarTela(usuario.tipo);
        }else{
          Alert.alert('Aviso:',"Senha ou usuário inválido");
        }
      }else{
        Alert.alert('Aviso:',"Senha ou usuário inválido");
      }
    } catch (error) {
      Alert.alert('Aviso:',"Erro ao logar: \n"+error.message);
    }
  }

  async function carregaInicial(){
    var token = null;
    var tipo = null;
    var usuarioCod = null;
    token = await SecureStore.getItemAsync(SecurityConstants.TOKEN_ACESSO);
    tipo = await SecureStore.getItemAsync(SecurityConstants.TIPO_USUARIO);
    usuarioCod = await SecureStore.getItemAsync(SecurityConstants.USUARIO_COD);
    if(token && tipo && usuarioCod){
      trocarTela(tipo);
    }
  }

  function trocarTela(tipo){
    if(tipo == 1){
      navigateToHistoricoProfessor();
    }else{
      navigateToHistoricoAluno();
    }
  }

  function navigateToHistoricoProfessor(){
    navigation.navigate("AulasProfessor");
  }

  function navigateToHistoricoAluno(){
    navigation.navigate("AulasAluno");
  }

}
