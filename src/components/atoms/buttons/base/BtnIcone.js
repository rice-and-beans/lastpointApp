import { StyleSheet, TouchableOpacity, Image } from 'react-native';

export default function BtnIcone(props) {

  return (
    <TouchableOpacity 
        style={styles.container}
        onPress={props.funcaoBtnIcone}
      >
        <Image 
          style={styles.IconeBotao}
            source={props.iconeBotao}
        /> 
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    marginLeft: 10,
    width: 'auto',
    height: 'auto',
  },
  IconeBotao: {
    width: 30,
    height: 30,
  }
});