import React from 'react'
import { StyleSheet, View, Image } from 'react-native'
import ViewVerdeArredondada from '../../../atoms/view/ViewVerdeArredondada'
import { FlatList } from 'react-native'
import Descricao from '../../../atoms/text/historico/Descricao'

export default function HistoricoAulas(props) {

    return (
        <View style={styles.container}>
            <FlatList style={{width: '100%', marginLeft: 15}} data={props.dados} renderItem={
                ({item})=><ViewVerdeArredondada>
                <Descricao>
                    Disciplina: {item.disciplina}{"\n"}
                    Horário: {item.horario}{"\n"}
                    Data: {item.data}{"\n"}
                    Professor: {item.professor}{"\n"}
                    Turma: {item.turma}
                </Descricao>
                {
                    props.icone ? <Image style={styles.icone} source={props.icone} /> : <View></View>
                }
            </ViewVerdeArredondada>
            } keyExtractor={(item)=>item.id}/>
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