import React from 'react'
import { StyleSheet, View, Image } from 'react-native'
import ViewVerdeArredondada from '../../atoms/view/ViewVerdeArredondada'
import { FlatList } from 'react-native'
import DescricaoBranca from '../../atoms/text/historico/DescricaoBranca'

export default function HistoricoAulas(props) {
    return (
        <View style={styles.container}>
            <FlatList style={{width: '100%', marginLeft: 15, height:'99%', paddingBottom: 20}}
                data={props.dados} 
                renderItem={ ({item})=>
                    <ViewVerdeArredondada>
                        <DescricaoBranca>
                            Disciplina: {item.disciplina}{"\n"}
                            Horário: {item.horario}{"\n"}
                            Data: {item.data}{"\n"}
                            Professor: {item.professor}{"\n"}
                            Turma: {item.turma}
                        </DescricaoBranca>
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
        height:'87%',
        alignItems: 'center',
        flexDirection: 'column',
        justifyContent: 'center'
    },
    icone: {
        marginBottom: 5,
        marginRight: 10,
        display: 'flex',
        width: 35,
        height: 35
    }
})