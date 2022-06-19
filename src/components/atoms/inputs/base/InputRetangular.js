import { StyleSheet, TextInput } from 'react-native';

export default function InputRetangular(props) {
  return (
    <TextInput
      style={styles.branco}
      placeholder={props.placeHolder}
      secureTextEntry={props.campoSenha}
      value={props.textInput}
      onChangeText={(value) => {props.setValue(value)}}
    />
  );
}

const styles = StyleSheet.create({
  branco: {
    margin: 10,
    borderWidth: 0,
    padding: 10,
    width: '85%',
    height: 40,
    borderRadius: 7,
    backgroundColor: '#fff'
  }
});