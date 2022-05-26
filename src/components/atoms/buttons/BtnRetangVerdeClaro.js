import { StyleSheet, TouchableOpacity, Text } from 'react-native';

export default function BtnRetangVerdeClaro(props) {
  return (
    <TouchableOpacity
        onPress={() => console.log('')}
        style={styles.botaoRetang}
      >
        <Text style={styles.textoBotaoRetang}>
            {props.titulo}
        </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  botaoRetang: {
    width:190,
    height:50,
    borderRadius:10,
    backgroundColor:'#B5FBB4',
    justifyContent: 'center',
    alignItems: 'center',
  },
  textoBotaoRetang: {
    color: '#373737',
    fontSize: 17,
    fontWeight: 'bold',
  }
});
