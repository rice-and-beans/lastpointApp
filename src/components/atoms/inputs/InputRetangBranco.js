import { StyleSheet, TextInput } from 'react-native';

export default function InputRetangBranco() {
  return (
    <TextInput
      style={styles.inputRetang}
      placeholder="Digite seu e-mail aqui"
    />
  );
}

const styles = StyleSheet.create({
  inputRetang: {
    backgroundColor: '#fff',
    width: '85%',
    height: 40,
    borderRadius: 7
  },
});
