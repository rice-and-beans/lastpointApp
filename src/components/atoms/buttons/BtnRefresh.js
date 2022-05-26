import { StyleSheet, TouchableOpacity, Image } from 'react-native';

export default function BtnRefresh(props) {
  return (
    <TouchableOpacity
        onPress={() => console.log('')}
      >
        <Image 
            source={props.icone} 
            style={styles.IconeBotao} 
        /> 
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  IconeBotao: {
    width:30,
    height:30,
  }
});