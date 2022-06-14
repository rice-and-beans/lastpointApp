import React from 'react'
import { View } from 'react-native'
import HistoricoAulas from "../../../components/molecules/proximaAula/historicoAulas/HistoricoAulas"
import TituloIcone from "../../molecules/proximaAula/titulos/TituloIcone"

export default function HistoricoAulasAluno(props) {

  const verificadoIcone = require('../../../../assets/verificadoIcone.png')
  const naoVerificadoIcone = require('../../../../assets/naoVerificadoIcone.png')

  return (
      <View>
        <TituloIcone titulo='Histórico de Aulas'/>
        <HistoricoAulas icone={true ? verificadoIcone : naoVerificadoIcone}/>
      </View>
  )
}