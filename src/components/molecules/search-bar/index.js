import React from 'react';
import { StyleSheet, View } from 'react-native';
import InputRetangBranco from '../../atoms/inputs/InputRetangBranco';
import TextoBranco from '../../atoms/text/TextoBranco';

export default function SearchComponent(props){
  return (
    <View style={styles.container}>
      <TextoBranco style={styles.texto} color='black'>Search</TextoBranco>
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