import InputRetangular from "../base/InputRetangular";

export default function InputRetangularEmail(props) {
  return (
    <InputRetangular placeHolder="E-mail" 
                     textInput={props.setLogin}
                     setValue={props.setLogin}>
    </InputRetangular>
  );
}