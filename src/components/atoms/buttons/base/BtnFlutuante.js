import { StyleSheet, TouchableOpacity, Image } from 'react-native';

export default function BtnFlutuante(props) {
  return (
    <TouchableOpacity
        onPress={() => console.log('')}
        style={styles.botaoflutuante}
      >
        <Image 
            source={props.icone} 
            style={styles.IconeBotao} 
        /> 
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  botaoflutuante: {
    width:80,
    height:80,
    backgroundColor:'41A05E#',
    borderRadius:50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  IconeBotao: {
    width:40,
    height:40,
  }
});
