import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import BtnFlutuante from './src/components/atoms/buttons/BtnFlutuante';
import BtnRetangular from './src/components/atoms/buttons/BtnRetangular';

export default function App() {

  const iconSalvar = require('./assets/salvarIcone.png');
  const iconEditar = require('./assets/editarIcone.png');
  const iconAdicionar = require('./assets/adicionarIcone.png');

  return (
    <View style={styles.container}>
      <BtnFlutuante icone={iconSalvar}></BtnFlutuante>
      <BtnFlutuante icone={iconEditar}></BtnFlutuante>
      <BtnFlutuante icone={iconAdicionar}></BtnFlutuante>
      <BtnRetangular titulo="Login"></BtnRetangular>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  }
});
