import {createStackNavigator} from '@react-navigation/stack';

import Login from "../pages/Login";
import AulasAluno from "../pages/AulasAluno";
import AulasProfessor from "../pages/AulasProfessor";
import HistoricoAluno from "../pages/HistoricoAluno";
import HistoricoProfessor from "../pages/HistoricoProfessor";
import NenhumaAula from "../pages/NenhumaAula";
import ScannerQrCode from "../pages/ScannerQrCode";
import VisualizacaoQrCode from "../pages/VisualizacaoQrCode";

const Stack = createStackNavigator();

export default function Routes() {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Login" options={{ headerShown: false }} component={Login} />
            <Stack.Screen name="AulasAluno" options={{ headerShown: false }} component={AulasAluno} />
            <Stack.Screen name="AulasProfessor" options={{ headerShown: false }} component={AulasProfessor} />
            <Stack.Screen name="HistoricoAluno" options={{ headerShown: false }} component={HistoricoAluno} />
            <Stack.Screen name="HistoricoProfessor" options={{ headerShown: false }} component={HistoricoProfessor} />
            <Stack.Screen name="NenhumaAula" options={{ headerShown: false }} component={NenhumaAula} />
            <Stack.Screen name="ScannerQrCode" options={{ headerShown: false }} component={ScannerQrCode} />
            <Stack.Screen name="VisualizacaoQrCode" options={{ headerShown: false }} component={VisualizacaoQrCode} />
        </Stack.Navigator>
    )
}