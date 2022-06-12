


import Home from './src/pages/Home';
import Login from './src/components/templates/login/Login';
import BarraPesquisa from './src/components/molecules/barra-pesquisa/Pesquisa';

//const Stack = createStackNavigator();

export default function App() {
  return (
    <Login></Login>
  );
}

/*<navigationContainer>
      <Stack.Navigator initialRouteName="Landing">
        <Stack.Screen name="Landing" component={Home} options={{headerShown: false}}/>
      </Stack.Navigator>
    </navigationContainer>*/