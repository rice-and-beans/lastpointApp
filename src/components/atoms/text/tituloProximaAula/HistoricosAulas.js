import { Text, StyleSheet } from 'react-native';

export default function HistoricosAulas() {
    return (
        <Text style={styles.texto}>Históricos de aulas</Text>
    );
}

const styles = StyleSheet.create({
    texto: {
        fontFamily: 'Roboto',
        fontSize: 25,
        color: '#000'
    }
});