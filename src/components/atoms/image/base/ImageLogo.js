import { StyleSheet, Image } from 'react-native';

export default function ImageLogo(props) {
    return (
          <Image 
              source={props.icone} 
              style={styles.Imagem} 
          /> 
    );
  }

  const styles = StyleSheet.create({
    Imagem: {
      width:'50%',
      height:'15%',
      marginBottom: '10%',
      justifyContent: 'center',
      alignItems: 'center',
    }   
  });