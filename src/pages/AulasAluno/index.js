import React from 'react'
import HistoricoAulasPage from '../../components/templates/historicoAulas/HistoricoAulasPage'
import { useState, useEffect } from 'react';
import { SafeAreaView, StatusBar } from 'react-native';
import { SecurityConstants } from '../../constants/securityConstants';
import NenhumaAulaPage from '../../components/templates/historicoAulas/NenhumaAulaPage';
import * as SecureStore from 'expo-secure-store';
import { useNavigation } from '@react-navigation/native';
import { AulasFuturasAlunoController } from '../../controllers/HistoricoAluno/aulasFuturasAlunoController';

export default function AulasProfessor() {
  
  const [listaDadosHistorico, setListaDadosHistorico] = useState([]);
  const aulasFuturasAlunoController = new AulasFuturasAlunoController();
  const navigation = useNavigation();

  async function buscaDados(){
    const usuarioCod = await SecureStore.getItemAsync(SecurityConstants.USUARIO_COD);
    const token = await SecureStore.getItemAsync(SecurityConstants.TOKEN_ACESSO);
    var listaTratadaExibicao = [];
    if(token){
      const retorno = await aulasFuturasAlunoController.buscaAulasFuturasAlunoController(token, usuarioCod);
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

  function navigateToScanner(){
    navigation.navigate("ScannerQrCode");
  }

  return (
      <SafeAreaView style={{flex: 1, marginTop: StatusBar.currentHeight}}>
        {listaDadosHistorico.length > 0 ? <HistoricoAulasPage funcaoBtnIcone={navigateToScanner} 
                                                              isExibeScanner={true} 
                                                              funcaoVoltar={voltar} 
                                                              funcaoAtualizar={atualizar}
                                                              lista={listaDadosHistorico}>
                                          </HistoricoAulasPage> : <NenhumaAulaPage></NenhumaAulaPage>}
      </SafeAreaView>
  )

  function tratamentoExibicao(retorno){
    var listaTratadaExibicao = []

    if(retorno){
      retorno.forEach(function(umItem){
        var dataIni = null;
        var dataFin = null;
        var dataAtual = null;
        if(umItem.aula && umItem.aula.dataHoraInicio && umItem.aula.dataHoraFim){
          dataIni = new Date(umItem.aula.dataHoraInicio);
          dataFin = new Date(umItem.aula.dataHoraFim);
        }
        dataAtual = new Date();
        const temAulaAtual = dataIni && dataFin && dataAtual && dataAtual > dataIni && dataAtual < dataFin;

        var item = {
          codigo: umItem.aula.codigo,
          disciplina: umItem.aula.disciplina ? umItem.aula.disciplina.nome : " - ",
          horario: dataIni && dataFin ? dataIni.toLocaleTimeString()+" - "+dataFin.toLocaleTimeString() : " - ",
          data: dataIni && dataFin && dataIni ? dataIni.getDate()+"/"+(dataIni.getMonth()+1)+"/"+dataIni.getFullYear(): " - ",
          professor: umItem.aula.usuario ? umItem.aula.usuario.nome : " - ",
          turma: umItem.aula.turma ? umItem.aula.turma.nome : " - ",
          temAulaAgora: temAulaAtual
        }
        listaTratadaExibicao.push(item)
      });
    }
    return listaTratadaExibicao;
  }

  function voltar(){
    SecureStore.setItemAsync(SecurityConstants.USUARIO_COD, null);
    SecureStore.setItemAsync(SecurityConstants.TOKEN_ACESSO, null);
    SecureStore.setItemAsync(SecurityConstants.TIPO_USUARIO, null);
    navigateToLogin();
  }

  function atualizar(){
    buscaDados()
  }

}