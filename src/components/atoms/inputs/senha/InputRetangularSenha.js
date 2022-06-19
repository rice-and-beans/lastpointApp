import { StyleSheet } from 'react-native';
import InputRetangular from "../base/InputRetangular";

export default function InputRetangularSenha(props) {
  return (
    <InputRetangular 
        placeHolder="Senha" 
        campoSenha={true}
        textInput={props.textSenha}
        setValue={props.setSenha}>
    </InputRetangular>
  );
}