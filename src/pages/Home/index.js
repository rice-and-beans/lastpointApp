import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { useNavigation } from "@react-navigation/native";
import HistoricoAulasAluno from '../../components/organisms/historicoAulas/HistoricoAulasAluno';

export default function Home(){
  const navigation = useNavigation();

  function navigateToLogin() {
    navigation.navigate("Login");
  }
  return (
    <View style={{marginTop: '10%'}}>
      <TouchableOpacity onPress={navigateToLogin}>
        <Text style={{ backgroundColor: "#E02041" }}>Go to second page</Text>
      </TouchableOpacity>
      <HistoricoAulasAluno/>
    </View>
  );
}
