import React, { Component } from "react";

import { Button } from '../../atoms/button';
import { Input } from '../../atoms/inputs';

export class SearchKeyword extends Component{
  render() {
    return (
      <form className='form-inline'>
        <Input />
        <Button />
      </form>
    )
  }
}