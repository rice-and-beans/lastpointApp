import React from 'react'
import { View, StyleSheet } from 'react-native'
import TituloIcone from "../../molecules/titulos/TituloIcone"
import AppBar from '../../molecules/appBar/AppBar'

export default function NenhumaAulaPage(props) {
  return (
    <View style={styles.container}>
      <AppBar funcaoVoltar={props.funcaoVoltar} funcaoAtualizar={props.funcaoAtualizar}/>
      <TituloIcone titulo='Próximas aulas'/>
      <View style={styles.containerMeio}>
        <TituloIcone titulo='Nenhuma'/>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height:'100%',
    width: '100%'
  },
  containerMeio: {
    height:'70%',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center'
  }
});