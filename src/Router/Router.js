/**
 * Created by Min on 2016/11/21.
 */
import React from 'react';
import {Route, IndexRoute} from 'react-router';

import App from '../Components/App';
import Todo from '../Components/Todos';
import Intro from '../Components/Intro';

export default (store) => {
    return (
        <Route path="/" component={App}>
            <IndexRoute component={Intro}/>
            <Route path="todo" component={Todo} store={store}/>
            <Route path="intro" component={Intro}/>
        </Route>
    )
}