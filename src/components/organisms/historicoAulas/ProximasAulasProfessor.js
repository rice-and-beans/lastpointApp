import React from 'react';
import { View } from 'react-native';
import HistoricoAulas from "../../../components/molecules/proximaAula/historicoAulas/HistoricoAulas";
import TituloIcone from "../../molecules/proximaAula/titulos/TituloIcone"

export default function ProximasAulasProfessor() {

  const qrcodeIcone = require('../../../../assets/qrcodeIcone.png');
  const historicoVerdeIcone = require('../../../../assets/historicoVerdeIcone.png');

  return (
      <View>
        <TituloIcone icone={historicoVerdeIcone} titulo='Próximas Aulas'/>
        <HistoricoAulas icone={qrcodeIcone}/>
      </View>
  )
}