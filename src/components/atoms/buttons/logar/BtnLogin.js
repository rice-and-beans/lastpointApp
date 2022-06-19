import BtnSubmit from "../base/BtnSubmit";
import React, { useState } from 'react';

export default function BtnLogin(props) {

  return (
    <BtnSubmit titulo="Login" onClickFunc={props.onClickFunc}></BtnSubmit>
  );
  
}
