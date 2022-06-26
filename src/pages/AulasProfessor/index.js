import React from 'react'
import HistoricoAulasPage from '../../components/templates/historicoAulas/HistoricoAulasPage'
import { useState, useEffect } from 'react';
import { AulasFuturasProfessorController } from '../../controllers/AulasProfessor/aulasFuturasProfessorController';
import { SafeAreaView, StatusBar } from 'react-native';
import { SecurityConstants } from '../../constants/securityConstants';
import NenhumaAulaPage from '../../components/templates/historicoAulas/NenhumaAulaPage';
import * as SecureStore from 'expo-secure-store';
import { useNavigation } from '@react-navigation/native';

export default function AulasProfessor() {
  
  const [listaDadosHistorico, setListaDadosHistorico] = useState([]);
  const aulasFuturasProfessorController = new AulasFuturasProfessorController();
  const navigation = useNavigation();

  useEffect(() => {
    const fetchData = async () => {
      await buscaDados();
    }
    fetchData().catch(setListaDadosHistorico([]));
  }, [])

  function navigateToLogin(){
    navigation.navigate("Login");
  }

  return (
      <SafeAreaView style={{flex: 1, marginTop: StatusBar.currentHeight}}>
        {listaDadosHistorico.length > 0 ? <HistoricoAulasPage funcaoIconeAula={funcaoIconeAula}
                                                              funcaoVoltar={voltar} 
                                                              funcaoAtualizar={atualizar} 
                                                              profAula={true} 
                                                              lista={listaDadosHistorico} 
                                                              isAluno={false}
                                                              tituloHisto={false}>
                                          </HistoricoAulasPage> 
                                          : 
                                          <NenhumaAulaPage funcaoVoltar={voltar} 
                                                           funcaoAtualizar={atualizar}>
                                          </NenhumaAulaPage>}
      </SafeAreaView>
  )

  async function voltar(){
    await SecureStore.setItemAsync(SecurityConstants.USUARIO_COD, '');
    await SecureStore.setItemAsync(SecurityConstants.TOKEN_ACESSO, '');
    await SecureStore.setItemAsync(SecurityConstants.TIPO_USUARIO, '');
    navigateToLogin();
  }

  async function atualizar(){
    await buscaDados();
  }

  async function funcaoIconeAula(aula){
    await SecureStore.setItemAsync(SecurityConstants.AULA_COD, aula);
    navigation.navigate("VisualizacaoQrCode");
  }

  async function buscaDados(){
    const usuarioCod = await SecureStore.getItemAsync(SecurityConstants.USUARIO_COD);
    const token = await SecureStore.getItemAsync(SecurityConstants.TOKEN_ACESSO);
    var listaTratadaExibicao = [];
    if(token){
      const retorno = await aulasFuturasProfessorController.buscaAulasFuturasProfessorController(token, usuarioCod);
      listaTratadaExibicao = tratamentoExibicao(retorno);
    }else{
      navigateToLogin();
    }
    setListaDadosHistorico(listaTratadaExibicao);
  }

  function tratamentoExibicao(retorno){
    var listaTratadaExibicao = []

    if(retorno){
      retorno.forEach(function(umItem){
        var dataIni = null;
        var dataFin = null;
        var dataAtual = null;

        if(umItem.dataHoraInicio && umItem.dataHoraFim){
          dataIni = new Date(umItem.dataHoraInicio);
          dataFin = new Date(umItem.dataHoraFim);
        }
        dataAtual = new Date();
        const temAulaAtual = dataIni && dataFin && dataAtual && dataAtual > dataIni && dataAtual < dataFin;

        var item = {
          codigo: umItem.codigo,
          disciplina: umItem.disciplina ? umItem.disciplina.nome : " - ",
          horario: dataIni && dataFin ? dataIni.toLocaleTimeString()+" - "+dataFin.toLocaleTimeString() : " - ",
          data: dataIni && dataFin && dataIni ? dataIni.getDate()+"/"+(dataIni.getMonth()+1)+"/"+dataIni.getFullYear(): " - ",
          professor: umItem.usuario ? umItem.usuario.nome : " - ",
          turma: umItem.turma ? umItem.turma.nome : " - ",
          temAulaAgora: temAulaAtual
        }
        listaTratadaExibicao.push(item)
      });
    }
    return listaTratadaExibicao;
  }

}