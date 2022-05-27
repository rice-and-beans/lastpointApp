import React from 'react';
import { StyleSheet, View } from 'react-native';
import InputRetangBranco from '../../atoms/inputs/InputRetangBranco';

export default function SearchComponent(props){
  return (
    <View style={styles.container}>
      <InputRetangBranco></InputRetangBranco>
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