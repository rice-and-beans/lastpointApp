import React from 'react';
import { StyleSheet, View } from 'react-native';
import BtnLogin from '../../atoms/buttons/logar/BtnLogin';
import ImageLogoLogin from '../../atoms/image/login/ImageLogoLogin.js';
import InputRetangularEmail from '../../atoms/inputs/email/InputRetangularEmail';
import InputRetangularSenha from '../../atoms/inputs/senha/InputRetangularSenha';

export default function LoginPage(props) {
    return (
        <View style={styles.container}>
            <ImageLogoLogin></ImageLogoLogin>
            
            <InputRetangularEmail 
                textLogin={props.textLogin} 
                setLogin={props.setLogin}>                
            </InputRetangularEmail>
            
            <InputRetangularSenha 
                style={styles.inputSenha}
                textSenha={props.textSenha}
                setSenha={props.setSenha}>
            </InputRetangularSenha>
            
            <BtnLogin onClickFunc={props.onClickFunc}></BtnLogin>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        height:'100%',
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#41A05E'
    },
    inputSenha: {
        backgroundColor:'#fff',
    }
});