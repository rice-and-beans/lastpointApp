import Home from './src/pages/Home';
import Login from './src/components/templates/login/Login';
import BarraPesquisa from './src/components/molecules/barra-pesquisa/Pesquisa';
import ViewVerde from './src/components/atoms/view/ViewVerde';
import TituloProximaAulaIcone from './src/components/molecules/proximaAula/titulos/TituloProximaAulaIcone';
import ProximaAula from './src/components/atoms/text/tituloProximaAula/ProximasAulas';

//const Stack = createStackNavigator();

export default function App() {
  return (
    <ViewVerde></ViewVerde>
  );
}

/*<navigationContainer>
      <Stack.Navigator initialRouteName="Landing">
        <Stack.Screen name="Landing" component={Home} options={{headerShown: false}}/>
      </Stack.Navigator>
    </navigationContainer>*/