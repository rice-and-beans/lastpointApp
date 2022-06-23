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
        {listaDadosHistorico.length > 0 ? <HistoricoAulasPage profAula={true} lista={listaDadosHistorico} isAluno={false}></HistoricoAulasPage> : <NenhumaAulaPage></NenhumaAulaPage>}
      </SafeAreaView>
  )

  function tratamentoExibicao(retorno){
    var listaTratadaExibicao = []
    
    if(retorno){
      retorno.forEach(function(umItem){
        var item = {
          disciplina: umItem.disciplina ? umItem.disciplina.nome : " - ",
          horario: " - ",
          data: umItem.dataHoraInicio,
          professor: umItem.usuario ? umItem.usuario.nome : " - ",
          turma: umItem.turma ? umItem.turma.nome : " - "
        }
        listaTratadaExibicao.push(item)
      });
    }
    return listaTratadaExibicao;
  }
}