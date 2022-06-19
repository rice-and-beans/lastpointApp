import React from 'react';
import { View } from 'react-native';
import LoginPage from '../../components/templates/login/LoginPage';
import * as SecureStore from 'expo-secure-store';
import { SecurityConstants } from "../../constants/securityConstants";
import { useNavigation } from '@react-navigation/native';
import { Alert } from "react-native";
import { useState } from 'react';
import { GerarTokenUsuarioController } from '../../controllers/Login/gerarTokenUsuarioController';

export default function Login() {

  const [login, setLogin] = useState('');
  const [senha, setSenha] = useState('');
  
  const navigation = useNavigation();
  const gerarTokenUsuarioController = new GerarTokenUsuarioController();
  
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

  function navigateToLogin() {
    navigation.navigate("Login");
  }

  async function logar(){
    var retorno;
    try {
      retorno = await gerarTokenUsuarioController.gerarTokenUsuario(login, senha);
      if(retorno){
        SecureStore.setItemAsync(SecurityConstants.TOKEN_ACESSO, retorno);
        navigateToLogin();
      }else{
        Alert.alert('Aviso:',"Senha ou usuário inválido");
      }
    } catch (error) {
      Alert.alert('Aviso:',"Erro ao logar: \n"+error.message);
    }
  }
}
