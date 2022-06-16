import { StyleSheet, TouchableOpacity, Image } from 'react-native';

export default function BtnVoltar(props) {

  const setaVoltarIcone = require('../../../../../assets/setaVoltarIcone.png');

  return (
    <TouchableOpacity 
        style={styles.container}
        onPress={() => console.log('')}
      >
        <Image 
            source={setaVoltarIcone} 
            style={styles.IconeBotao} 
        /> 
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 'auto',
    height: 'auto',
  },
  IconeBotao: {
    width:30,
    height:30,
  }
});