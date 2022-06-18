import React from 'react'
import { View } from 'react-native'
import AppBar from '../../molecules/appBar/AppBar'
import DescricaoPreta from '../../atoms/text/historico/DescricaoPreta'
import TituloPreto from '../../atoms/text/titulo/TituloPreto'

export default function ExibirQRCode(props) {

    return (
        <View>
            <AppBar/>
            <DescricaoPreta>Escaneie o QRcode</DescricaoPreta>
            <TituloPreto style={{textAlign:'center'}}>Informática</TituloPreto>
        </View>
    )
}