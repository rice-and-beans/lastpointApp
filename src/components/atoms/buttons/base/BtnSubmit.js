import { StyleSheet, TouchableOpacity, Text } from 'react-native';

export default function BtnSubmit(props) {
  return (
    <TouchableOpacity
        onPress={() => console.log('')}
        style={styles.botaoSubmit}
      >
        <Text style={styles.textoSubmit}>
            {props.titulo}
        </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
    botaoSubmit: {
        width:190,
        height:50,
        borderRadius:10,
        backgroundColor:'#B5FBB4',
        justifyContent: 'center',
        alignItems: 'center',
    },
    textoSubmit: {
        color: '#373737',
        fontSize: 17,
        fontWeight: 'bold',
    }
});
