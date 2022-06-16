import React from 'react'
import { View } from 'react-native'
import HistoricoAulas from "../../../components/molecules/proximaAula/historicoAulas/HistoricoAulas"
import TituloIcone from "../../molecules/proximaAula/titulos/TituloIcone"
import AppBar from '../../molecules/appBar/AppBar'

const lista = [
  {
    id: 1,
    disciplina: 'Informática',
    horario: '19:00',
    data: '21/06/2022',
    professor: 'Douglas',
    turma: '2'
  },
  {
    id: 2,
    disciplina: 'Informática',
    horario: '19:00',
    data: '21/06/2022',
    professor: 'Douglas',
    turma: '2'
  }
]

export default function HistoricoAulasAluno(props) {

  const verificadoIcone = require('../../../../assets/verificadoIcone.png')
  const naoVerificadoIcone = require('../../../../assets/naoVerificadoIcone.png')

  return (
      <View>
        <AppBar/>
        <TituloIcone titulo='Histórico de Aulas'/>
        <HistoricoAulas dados={lista} icone={true ? verificadoIcone : naoVerificadoIcone}/>
      </View>
  )
}