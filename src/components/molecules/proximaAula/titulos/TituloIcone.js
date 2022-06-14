import React from 'react';
import { StyleSheet, View, Image } from 'react-native';
import Titulo from "../../../atoms/text/titulo/Titulo";

export default function TituloIcone(props) {

    return (
        <View style={styles.container}>
            <Titulo>{props.titulo}</Titulo>
            {
                props.icone ? <Image style={styles.icone} source={props.icone} /> : <View></View>
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
        width: '35px',
        height: '35px',
        alignItems: 'center'
    }
});