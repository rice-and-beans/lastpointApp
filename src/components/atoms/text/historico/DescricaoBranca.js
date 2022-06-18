import { Text, StyleSheet } from 'react-native';

export default function DescricaoBranca(props) {
    return (
        <Text style={styles.texto}>{props.children}</Text>
    );
}

const styles = StyleSheet.create({
    texto: {
        margin: 15,
        fontFamily: 'Roboto',
        fontSize: 20,
        color: '#fff',
        lineHeight: 27
    }
});