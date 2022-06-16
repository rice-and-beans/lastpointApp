import React from 'react'
import { View } from 'react-native'
import HistoricoAulas from "../../../components/molecules/proximaAula/historicoAulas/HistoricoAulas"
import TituloIcone from "../../molecules/proximaAula/titulos/TituloIcone"
import AppBar from '../../molecules/appBar/AppBar'

export default function ProximasAulasProfessor() {

  const qrcodeIcone = require('../../../../assets/qrcodeIcone.png')
  const historicoVerdeIcone = require('../../../../assets/historicoVerdeIcone.png')
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
      data: '22/06/2022',
      professor: 'Douglas',
      turma: '2'
    },
    {
      id: 3,
      disciplina: 'Informática',
      horario: '19:00',
      data: '23/06/2022',
      professor: 'Douglas',
      turma: '2'
    },
    {
      id: 4,
      disciplina: 'Informática',
      horario: '19:00',
      data: '24/06/2022',
      professor: 'Douglas',
      turma: '2'
    },
    {
      id: 5,
      disciplina: 'Informática',
      horario: '19:00',
      data: '25/06/2022',
      professor: 'Douglas',
      turma: '2'
    },
    {
      id: 6,
      disciplina: 'Informática',
      horario: '19:00',
      data: '26/06/2022',
      professor: 'Douglas',
      turma: '2'
    },
    {
      id: 7,
      disciplina: 'Informática',
      horario: '19:00',
      data: '27/06/2022',
      professor: 'Douglas',
      turma: '2'
    },
    {
      id: 8,
      disciplina: 'Informática',
      horario: '19:00',
      data: '28/06/2022',
      professor: 'Douglas',
      turma: '2'
    }
  ]

  return (
      <View>
        <AppBar/>
        <TituloIcone icone={historicoVerdeIcone} titulo='Próximas Aulas'/>
        <HistoricoAulas icone={qrcodeIcone} dados={lista}/>
      </View>
  )
}