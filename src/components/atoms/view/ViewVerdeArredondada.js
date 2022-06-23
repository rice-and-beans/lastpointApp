import { StyleSheet, View } from 'react-native';

export default function ViewVerdeArredondada(props) {
    return (
        <View style={[styles.view, props.style]}>{props.children}</View>
    );
}

const styles = StyleSheet.create({
    view: {
        margin: 10,
        justifyContent: 'space-between',
        alignItems: 'flex-end',
        flexDirection: 'row',
        width:'92%',
        height:'auto',
        backgroundColor:'#41A05E',
        borderRadius: 20
    }
});