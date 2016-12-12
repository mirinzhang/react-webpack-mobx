import React from 'react';
import { render } from 'react-dom';
import { Router, browserHistory } from 'react-router';

import Routes from './Router/Router';
import Stores from './Mobx/Todos';

const state = new Stores();
const { routes } = Routes;

render(
  <Router history={browserHistory} routes={routes(state)} />,
  document.body,
);
