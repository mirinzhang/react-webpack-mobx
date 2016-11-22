import React from 'react';
import {render} from 'react-dom';
import {Router, browserHistory} from 'react-router';

import Routes from './Router/Router';
import Stores from './Mobx/State';

const { state } = Stores;
const { routes } = Routes;

render(<Router history={browserHistory} routes={routes(state)}></Router>, document.body);
