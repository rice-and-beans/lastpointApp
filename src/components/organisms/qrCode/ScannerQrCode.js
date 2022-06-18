import React from 'react'
import { View } from 'react-native'
import AppBar from '../../molecules/appBar/AppBar'
import LeitorQRCode from '../../molecules/qrCode/LeitorQRCode'
import DescricaoPreta from '../../atoms/text/historico/DescricaoPreta'

export default function ScannerQrCode(props) {

    return (
        <View style={{flex: 1}}>
            <AppBar/>
            <DescricaoPreta>Escaneie o QRcode</DescricaoPreta>
            <View style={{justifyContent:'center'}}>
                <LeitorQRCode />
            </View>
        </View>
    )
}