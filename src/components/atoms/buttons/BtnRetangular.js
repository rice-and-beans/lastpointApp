import { StyleSheet, TouchableOpacity, Text } from 'react-native';

export default function BtnRetangular(props) {
  return (
    <TouchableOpacity
        onPress={() => console.log('')}
        style={styles.botaoLogin}
      >
        <Text style={styles.textoLogin}>
            {props.titulo}
        </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  botaoLogin: {
    width:190,
    height:50,
    borderRadius:10,
    backgroundColor:'#B5FBB4',
    justifyContent: 'center',
    alignItems: 'center',
  },
  textoLogin: {
    color: '#373737',
    fontSize: 17,
    fontWeight: 'bold',
  }
});
