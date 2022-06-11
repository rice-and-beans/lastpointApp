import { StyleSheet } from 'react-native';
import InputRetangular from "../base/InputRetangular";

export default function InputRetangularEmail() {
  return (
    <InputRetangular style={styles.inputEmail} placeHolder="Email"></InputRetangular>
  );
}

const styles = StyleSheet.create({
  inputEmail: {
    outlineStyle:'solid',
    backgroundColor:'#fff'
  }
});