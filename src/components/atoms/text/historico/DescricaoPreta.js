import { Text, StyleSheet } from 'react-native';

export default function DescricaoPreta(props) {
    return (
        <Text style={styles.texto}>{props.children}</Text>
    );
}

const styles = StyleSheet.create({
    texto: {
        margin: 15,
        fontFamily: 'Roboto',
        fontSize: 20,
        color: '#000',
        lineHeight: 27,
        textAlign: 'center'   
    }
});