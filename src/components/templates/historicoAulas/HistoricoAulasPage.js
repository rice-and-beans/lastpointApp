import React from 'react'
import { View } from 'react-native'
import HistoricoAulas from "../../organisms/historicoAulas/HistoricoAulas"
import TituloIcone from "../../molecules/titulos/TituloIcone"
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

export default function HistoricoAulasPage(props) {

  const verificadoIcone = require('../../../../assets/verificadoIcone.png')
  const naoVerificadoIcone = require('../../../../assets/naoVerificadoIcone.png')
  const icone = true ? verificadoIcone : naoVerificadoIcone

  return (
      <View>
        <AppBar/>
        <TituloIcone titulo='Histórico de Aulas'/>
        <HistoricoAulas dados={lista} icone={props.isAluno ? icone : null}/>
      </View>
  )
}