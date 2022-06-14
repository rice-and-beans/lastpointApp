import Home from './src/pages/Home'
import Login from './src/components/templates/login/Login'
import BarraPesquisa from './src/components/molecules/barra-pesquisa/Pesquisa'
import ViewVerde from './src/components/atoms/view/ViewVerde'
import HistoricoAulasAluno from './src/components/organisms/historicoAulas/HistoricoAulasAluno'
import HistoricoAulas from './src/components/molecules/proximaAula/historicoAulas/HistoricoAulas'

//const Stack = createStackNavigator();

export default function App() {
  return (
    <HistoricoAulasAluno></HistoricoAulasAluno>
  )
}

/*<navigationContainer>
      <Stack.Navigator initialRouteName="Landing">
        <Stack.Screen name="Landing" component={Home} options={{headerShown: false}}/>
      </Stack.Navigator>
    </navigationContainer>*/