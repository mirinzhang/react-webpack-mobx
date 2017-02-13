import React from 'react';
import { render } from 'react-dom';
import { Router, browserHistory } from 'react-router';

import Routes from './Router/Index';

render(
    <Router history={browserHistory} routes={Routes.routes()} />,
    document.getElementById('app'),
);
