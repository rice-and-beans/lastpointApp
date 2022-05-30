import { StyleSheet, TextInput } from 'react-native';
import { Button } from 'react-native-web';

export default function InputRetangular(props) {
  return (
    <TextInput
      style={styles.inputRetangular}
      placeholder={props.placeHolder}
      secureTextEntry={props.campoSenha}
    />
  );
}

const styles = StyleSheet.create({
  inputRetangular: {
    outlineStyle:'none',
    padding: 10,
    width: '85%',
    height: 40,
    borderRadius: 7
  },
});
