import { StyleSheet, View } from 'react-native';

export default function ViewVerdeRetangular(props) {
    return (
        <View style={styles.view}>{props.children}</View>
    );
}

const styles = StyleSheet.create({
    view: {
        padding: 10,
        display:'flex',
        width:'100%',
        height:'auto',
        backgroundColor:'#41A05E'
    }
});