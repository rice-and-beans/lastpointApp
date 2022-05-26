import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import BtnFlutuante from './src/components/atoms/buttons/BtnFlutuante';
import BtnRetangVerdeClaro from './src/components/atoms/buttons/BtnRetangVerdeClaro';
import BtnRefresh from './src/components/atoms/buttons/BtnRefresh';
import BtnVoltar from './src/components/atoms/buttons/BtnVoltar';
import InputRetangBranco from './src/components/atoms/inputs/InputRetangBranco';

export default function App() {

  const iconSalvar = require('./assets/salvarIcone.png');
  const iconEditar = require('./assets/editarIcone.png');
  const iconAdicionar = require('./assets/adicionarIcone.png');
  const iconRefresh = require('./assets/refreshingIcone.png');
  const iconVoltar = require('./assets/setaVoltarIcone.png');

  return (
    <View style={styles.container}>
      <BtnFlutuante icone={iconSalvar}></BtnFlutuante>
      <BtnFlutuante icone={iconEditar}></BtnFlutuante>
      <BtnFlutuante icone={iconAdicionar}></BtnFlutuante>
      <BtnRetangVerdeClaro titulo="Login"></BtnRetangVerdeClaro>
      <InputRetangBranco></InputRetangBranco>
      <BtnRefresh icone={iconRefresh}></BtnRefresh>
      <BtnVoltar icone={iconVoltar}></BtnVoltar>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#41A05E',
    alignItems: 'center',
    justifyContent: 'center',
  }
});
