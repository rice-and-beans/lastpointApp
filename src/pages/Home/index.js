import React from 'react';
import { SafeAreaView, Text, TouchableOpacity, StatusBar } from 'react-native';
import { useNavigation } from "@react-navigation/native";

export default function Home(){
  const navigation = useNavigation();

  function navigateToLogin() {
    navigation.navigate("Login");
  }
  
  return (
    <SafeAreaView style={{flex: 1, marginTop: StatusBar.currentHeight}}>
      <TouchableOpacity onPress={navigateToLogin}>
        <Text style={{ backgroundColor: "#E02041" }}>Go to second page</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}