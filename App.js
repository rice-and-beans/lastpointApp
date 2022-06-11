import {createStackNavigator} from '@react-navigation/stack';
import {navigationContainer} from '@react-navigation/native';

import Home from './src/pages/Home';
import Login from './src/components/templates/login/Login';

const Stack = createStackNavigator();

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