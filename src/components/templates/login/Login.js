import React from 'react';
import { StyleSheet, View } from 'react-native';
import BtnLogin from '../../atoms/buttons/logar/BtnLogin';
import ImageLogoLogin from '../../atoms/image/login/ImageLogoLogin.js';
import InputRetangularEmail from '../../atoms/inputs/email/InputRetangularEmail';
import InputRetangularSenha from '../../atoms/inputs/senha/InputRetangularSenha';

export default function Login() {
    return (
        <View style={styles.container}>
            <ImageLogoLogin></ImageLogoLogin>
            <InputRetangularEmail ></InputRetangularEmail>
            <InputRetangularSenha style={styles.inputSenha}></InputRetangularSenha>
            <BtnLogin></BtnLogin>
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
        backgroundColor:'#fff'
    }
});