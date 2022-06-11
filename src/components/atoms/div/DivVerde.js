import { StyleSheet, Div } from 'react-native';

export default function TextoPreto(props) {
    return (
        <Div style={styles.div}/>
    );
}

const styles = StyleSheet.create({
    div: {
        width:'90%',
        height:'70%',
        backgroundColor:'#41A05E',
        borderRadius:50,
        justifyContent: 'center'
    }
});