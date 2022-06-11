import React from 'react';
import { StyleSheet, View } from 'react-native';
import ProximasAulas from "../../../atoms/text/tituloProximaAula/ProximasAulas";

export default function TituloProximaAulaIcone() {

    const historicoVerdeIcone = require('../../../../assets/historicoVerdeIcone.png');

    return (
        <View style={styles.container}>
            <Text  style={ProximasAulas}/>
            <Image style={styles.historicoVerdeIcone} source={historicoVerdeIcone} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        height:'100%',
        width: '100%',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'row'
    },
    historicoVerdeIcone: {
        width: '30px',
        height: '30px',
        alignItems: 'center'
    }
});