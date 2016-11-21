import React from 'react';
import {render} from 'react-dom';
import {Router, Route, browserHistory} from 'react-router';

import App from './components/App';
import First from './components/First';
import Second from './components/Second';

render((
        <Router history={browserHistory}>
            <Route path="/" component={App}>
                <Route path="first" component={First} />
                <Route path="second" component={Second} />
            </Route>
        </Router>
    ),
    document.body);
