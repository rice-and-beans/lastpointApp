import React from "react";
import ReactDOM from "react";

import { BrowserRouter as Router } from 'react-router-dom';

import { route } from './pages';
import { MainTemplate } from './components/templates/main';

ReactDOM.render(
  <Router>
    <MainTemplate> { route } </MainTemplate>
  </Router>
  , document.getElementById('root')
);