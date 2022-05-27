import React from 'react';
import { StyleSheet, View } from 'react-native';
import InputRetangBranco from '../../atoms/inputs/InputRetangBranco';
import TextoGeral from '../../atoms/text/TextoGeral';

export default function SearchComponent(props){
  return (
    <View style={styles.container}>
      <TextoGeral style={styles.texto} color='black'>Search</TextoGeral>
      <InputRetangBranco placeHolder='Search'></InputRetangBranco>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  }
});