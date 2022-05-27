import { StyleSheet, Text } from 'react-native';

export default function TextoGeral(props) {
  return (
    <Text
      style={styles.texto}
    />
  );
}

const styles = StyleSheet.create({
  texto: {
    fontSize: 18
  }
});