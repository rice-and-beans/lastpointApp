import React from 'react'
import { View } from 'react-native'
import HistoricoAulas from "../../organisms/historicoAulas/HistoricoAulas"
import TituloIcone from "../../molecules/titulos/TituloIcone"
import AppBar from '../../molecules/appBar/AppBar'

export default function ProximasAulasPage() {

  const qrcodeIcone = require('../../../../assets/qrcodeIcone.png')
  const qrcodeIconeVerde = require('../../../../assets/qrcodeIconeVerde.png')
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
        <TituloIcone icone={historicoVerdeIcone} btnIcone={true ? qrcodeIconeVerde : null} titulo='Próximas Aulas'/>
        <HistoricoAulas icone={true ? null : qrcodeIcone} dados={lista}/>
      </View>
  )
}