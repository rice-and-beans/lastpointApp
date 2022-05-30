import React from 'react';
import { StyleSheet, View, Image } from 'react-native';
import InputRetangular from '../../atoms/inputs/base/InputRetangular';

export default function Pesquisa(){

  const iconeLupa = require('../../../../assets/lupaVerdeIcone.png');

  return (
    <View style={styles.container}>
      <Image style={styles.iconLupa} source={iconeLupa} /> 
      <InputRetangular style={styles.inputPesquisa} placeHolder='Pesquisa'/>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row', 
    justifyContent: 'center', 
    alignItems: 'center', 
    borderWidth: 0.5, 
    borderColor: '#41A05E',
    borderRadius: 5
  },
  iconLupa: {
    width: '30px',
    height: '30px',
    alignItems: 'center'
  },
  inputPesquisa: {
    backgroundColor: 'transparent'
  }
});