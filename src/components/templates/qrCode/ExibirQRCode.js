import React from 'react'
import { Image, View, StyleSheet } from 'react-native'
import AppBar from '../../molecules/appBar/AppBar'
import DescricaoPreta from '../../atoms/text/historico/DescricaoPreta'
import TituloPreto from '../../atoms/text/titulo/TituloPreto'

export default function ExibirQRCode(props) {

    const celularIcone = require('../../../../assets/celularIcone.png')

    return (
        <View>
            <AppBar funcaoVoltar={props.funcaoVoltar} funcaoAtualizar={props.funcaoAtualizar}/>
            <DescricaoPreta>Escaneie o QRcode</DescricaoPreta>
            <View style={styles.coiso}>
                <Image style={styles.imagem} source={celularIcone} />
            </View>
            <TituloPreto style={{textAlign:'center'}}>Informática</TituloPreto>
        </View>
    )
}

const styles = StyleSheet.create({
    coiso: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    imagem: {
        margin: 10,
        display: 'flex',
        width: 350,
        height: 600
    }
})