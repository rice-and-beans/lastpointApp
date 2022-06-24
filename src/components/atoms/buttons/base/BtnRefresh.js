import { StyleSheet, TouchableOpacity, Image } from 'react-native';

export default function BtnRefresh(props) {

  const refreshingIcone = require('../../../../../assets/refreshingIcone.png');

  return (
    <TouchableOpacity 
        style={styles.container}
        onPress={props.funcaoAtualizar}
      >
        <Image 
            source={refreshingIcone} 
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
    width: 30,
    height: 30,
  }
});