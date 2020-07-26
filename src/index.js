import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import { BrowserRouter, HashRouter, Route,Switch } from 'react-router-dom';


ReactDOM.render(
  <HashRouter>
  <Switch>
  <Route exact path='/' component={App} />
  </Switch>
  </HashRouter>,
  document.getElementById('root')
);
