import InputRetangular from "../base/InputRetangular";

export default function InputRetangularEmail(props) {
  return (
    <InputRetangular placeHolder="E-mail" 
                     textInput={props.textLogin}
                     setValue={props.setLogin}>
    </InputRetangular>
  );
}