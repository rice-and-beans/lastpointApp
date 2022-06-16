import React from 'react'
import { View } from 'react-native'
import HistoricoAulas from "../../../components/molecules/proximaAula/historicoAulas/HistoricoAulas"
import TituloIcone from "../../molecules/proximaAula/titulos/TituloIcone"
import AppBar from '../../molecules/appBar/AppBar'

export default function ProximasAulasAluno() {

  const qrcodeIconeVerde = require('../../../../assets/qrcodeIconeVerde.png')
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
        <TituloIcone btnIcone={qrcodeIconeVerde} titulo='Próximas Aulas'/>
        <HistoricoAulas dados={lista}/>
      </View>
  )
}