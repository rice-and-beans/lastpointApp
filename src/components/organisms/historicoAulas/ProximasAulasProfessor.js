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