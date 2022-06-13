import { Text, StyleSheet } from 'react-native';

export default function ProximasAulas() {
    return (
        <Text style={styles.texto}>Próximas aulas</Text>
    );
}

const styles = StyleSheet.create({
    texto: {
        fontFamily: 'Roboto',
        fontSize: 25,
        color: '#000'
    }
});