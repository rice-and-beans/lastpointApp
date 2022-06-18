import React from 'react'
import { View } from 'react-native'
import AppBar from '../../molecules/appBar/AppBar'
import LeitorQRCode from '../../molecules/qrCode/LeitorQRCode'

export default function ScannerQrCode(props) {

    return (
        <View style={{flex: 1}}>
            <AppBar/>
            <View style={{justifyContent:'center'}}>
                <LeitorQRCode />
            </View>
        </View>
    )
}