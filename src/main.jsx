import React from 'react';
import {render} from 'react-dom';
import {Router, browserHistory} from 'react-router';

import routes from './Router/Router';
import {state} from './Mobx/State';

render(<Router history={browserHistory} routes={routes(state)}></Router>, document.body);
