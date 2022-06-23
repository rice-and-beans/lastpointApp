import React from 'react';
import HistoricoAulasPage from '../../components/templates/historicoAulas/HistoricoAulasPage';
import { SafeAreaView, StatusBar } from 'react-native';

export default function HistoricoProfessor() {
  return (
      <SafeAreaView style={{flex: 1, marginTop: StatusBar.currentHeight}}>
        <HistoricoAulasPage></HistoricoAulasPage>
      </SafeAreaView>
  )
}