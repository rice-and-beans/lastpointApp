import { StyleSheet, Text } from 'react-native';

export default function TextoBranco(props) {
  return (
    <Text
      style={styles.texto}
    />
  );
}

const styles = StyleSheet.create({
  texto: {
    fontFamily: 'Roboto',
    fontSize: 18,
    color:'#fff'
  }
});