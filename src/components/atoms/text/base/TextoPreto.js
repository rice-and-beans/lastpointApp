import { StyleSheet, Text } from 'react-native';

export default function TextoPreto(props) {
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
        color:'#000'
    }
});