import { StyleSheet, TextInput } from 'react-native';

export default function InputRetangBranco(props) {
  return (
    <TextInput
      style={styles.inputRetang}
      placeholder={props.placeHolder}
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
