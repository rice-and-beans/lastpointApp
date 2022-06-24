import React from 'react'
import { View } from 'react-native'
import HistoricoAulas from "../../organisms/historicoAulas/HistoricoAulas"
import TituloIcone from "../../molecules/titulos/TituloIcone"
import AppBar from '../../molecules/appBar/AppBar'

export default function HistoricoAulasPage(props) {

  const verificadoIcone = require('../../../../assets/verificadoIcone.png')
  const naoVerificadoIcone = require('../../../../assets/naoVerificadoIcone.png')
  const qrCode = require('../../../../assets/qrcodeIcone.png')
  const qrcodeIconeVerde = require('../../../../assets/qrcodeIconeVerde.png')
  const icone = true ? verificadoIcone : naoVerificadoIcone

  return (
      <View>
        <AppBar funcaoVoltar={props.funcaoVoltar} funcaoAtualizar={props.funcaoAtualizar}/>
        <TituloIcone funcaoBtnIcone={props.funcaoBtnIcone} btnIcone={props.isExibeScanner ? qrcodeIconeVerde: null} titulo='Histórico de Aulas'/>
        <HistoricoAulas funcaoIconeAula={props.funcaoIconeAula} dados={props.lista} icone={props.isAluno ? icone : props.profAula ? qrCode : null}/>
      </View>
  )
}