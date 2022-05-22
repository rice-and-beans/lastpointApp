import React, { Component } from "react";
import { Link } from 'react-router-dom';

export class NavbarMenu extends Component{
  render() {
    return (
      <ul class='navbar-nav mr-auto'>
        <li class='nav-item'>
          <a class='nav-link' href='#'>Home</a>
        </li>
        <li class='nav-item'>
          <a class='nav-link' href='#'></a>
        </li>
      </ul>
    )
  }
}