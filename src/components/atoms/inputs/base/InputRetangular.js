import { StyleSheet, TextInput } from 'react-native';

export default function InputRetangular(props) {
  return (
    <TextInput
      style={styles.inputRetangular}
      placeholder={props.placeHolder}
      secureTextEntry={props.campoSenha}
    />
  );
}

const color = props.color

const styles = StyleSheet.create({
  inputRetangular: {
    outlineStyle:'none',
    padding: 10,
    width: '85%',
    height: 40,
    borderRadius: 7,
    backgroundColor: color
  }
});
