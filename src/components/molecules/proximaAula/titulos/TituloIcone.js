import React from 'react';
import { StyleSheet, View, Image } from 'react-native';
import Titulo from "../../../atoms/text/titulo/TituloPreto";
import BtnIcone from '../../../atoms/buttons/base/BtnIcone'

export default function TituloIcone(props) {

    return (
        <View style={styles.container}>
            <Titulo>{props.titulo}</Titulo>
            {
                props.icone ? <Image style={styles.icone} source={props.icone} /> : null
            }
            {
                props.btnIcone ? <BtnIcone iconeBotao={props.btnIcone} /> : null
            }
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        margin: 10,
        height:'auto',
        width: 'auto',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'row'
    },
    icone: {
        width: 30,
        height: 30,
        alignItems: 'center'
    }
});