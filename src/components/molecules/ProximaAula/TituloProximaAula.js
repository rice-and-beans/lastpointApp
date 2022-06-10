import React from 'react';
import { StyleSheet, View } from 'react-native';
import TextoPreto from "../../atoms/text/base/TextoPreto";

export default function TituloProximaAula() {

    const historicoVerdeIcone = require('../../../../assets/historicoVerdeIcone.png');

    return (
        <View style={styles.container}>
            <Text  style={TextoPreto}>Próximas aulas</Text>
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