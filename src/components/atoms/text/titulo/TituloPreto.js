import { Text, StyleSheet } from 'react-native';

export default function TituloPreto(props) {
    return (
        <Text style={[styles.texto,props.style]}>{props.children}</Text>
    );
}

const styles = StyleSheet.create({
    texto: {
        fontFamily: 'Roboto',
        fontSize: 25,
        color: '#000'
    }
});