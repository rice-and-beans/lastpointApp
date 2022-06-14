import react from "react";
import {createStackNavigator} from '@react-navigation/stack';

import Login from "../pages/Login";
import Home from "../pages/Home";

const Stack = createStackNavigator();

export default function Routes() {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Home" options={{ headerShown: false }} component={Home} />
            <Stack.Screen name="Login" options={{ headerShown: false }} component={Login} />
        </Stack.Navigator>
    )
}