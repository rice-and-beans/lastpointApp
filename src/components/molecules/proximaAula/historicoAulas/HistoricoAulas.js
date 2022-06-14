import React from 'react'
import { StyleSheet, View, Image } from 'react-native'
import ViewVerde from '../../../atoms/view/ViewVerde'
import Descricao from '../../../atoms/text/historico/Descricao'

export default function HistoricoAulas(props) {

    return (
        <View style={styles.container}>
            <ViewVerde>
                <Descricao>
                    Disciplina: {props.disciplina}{"\n"}
                    Horário: {props.horario}{"\n"}
                    Data: {props.data}{"\n"}
                    Professor: {props.professor}{"\n"}
                    Turma: {props.turma}
                </Descricao>
                {
                    props.icone ? <Image style={styles.icone} source={props.icone} /> : <View></View>
                }
            </ViewVerde>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        width: 'auto',
        height: 'auto',
        alignItems: 'center',
        flexDirection: 'column',
        justifyContent: 'center'
    },
    icone: {
        margin: 10,
        display: 'flex',
        width: 35,
        height: 35
    }
})