import { StyleSheet, View } from 'react-native';

export default function ViewVerdeArredondada(props) {
    return (
        <View style={styles.view}>{props.children}</View>
    );
}

const styles = StyleSheet.create({
    view: {
        margin: 10,
        display:'flex',
        justifyContent: 'space-between',
        alignItems: 'flex-end',
        flexDirection: 'row',
        width:'90%',
        height:'auto',
        backgroundColor:'#41A05E',
        borderRadius: 25
    }
});