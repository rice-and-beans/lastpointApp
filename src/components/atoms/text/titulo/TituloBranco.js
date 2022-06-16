import { Text, StyleSheet } from 'react-native';

export default function TituloBranco(props) {
    return (
        <Text style={styles.texto}>{props.children}</Text>
    );
}

const styles = StyleSheet.create({
    texto: {
        fontFamily: 'Roboto',
        fontSize: 25,
        color: '#fff',
    }
});