import React from 'react'
import { StyleSheet, View, Image } from 'react-native'
import ViewVerde from '../../../atoms/view/ViewVerde'
import Descricao from '../../../atoms/text/historico/Descricao'

export default function HistoricoAulas(props) {

    return (
        <View style={styles.container}>
            <ViewVerde>
                <Descricao>
                    Disciplina: {props.disciplina}<br/>
                    Horário: {props.horario}<br/>
                    Data: {props.data}<br/>
                    Professor: {props.professor}<br/>
                    Turma: {props.turma}<br/>
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
        width: '35px',
        height: '35px'
    }
})