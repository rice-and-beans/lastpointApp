import React from 'react';
import { Image, View, StyleSheet } from 'react-native';
import AppBar from '../../molecules/appBar/AppBar';
import DescricaoPreta from '../../atoms/text/historico/DescricaoPreta';
import TituloPreto from '../../atoms/text/titulo/TituloPreto';
import { SvgUri } from 'react-native-svg';

export default function ExibirQRCode(props) {
    
    return (
        <View>
            <AppBar funcaoVoltar={props.funcaoVoltar} funcaoAtualizar={props.funcaoAtualizar}/>
            <DescricaoPreta>Escaneie o QRcode</DescricaoPreta>
            <View style={styles.visualizador}>
                <Image style={styles.imagemQrcode} source={require("../../../uploads/qrcode.png")} />
            </View>
            <TituloPreto style={{textAlign:'center'}}>{props.aulaCod}</TituloPreto>
        </View>
    )
}

const styles = StyleSheet.create({
    visualizador: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    imagemPadrao: {
        margin: 10,
        display: 'flex',
        width: 350,
        height: 600
    },
    imagemQrcode: {
        margin: 10,
        display: 'flex',
        width: 350,
        height: 360
    }
})