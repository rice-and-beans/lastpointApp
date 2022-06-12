import { StyleSheet, View } from 'react-native';

export default function ViewVerde(props) {
    return (
        <View style={styles.view}/>
    );
}

const styles = StyleSheet.create({
    view: {
        margin: 10,
        display:'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        width:'90%',
        height:'40%',
        backgroundColor:'#41A05E',
        borderRadius:50
    }
});