/**
 * Created by Min on 2016/11/21.
 * App Routers
 */
import React from 'react';
import { Route, IndexRoute } from 'react-router';

import {
  app,
  intro,
  todo,
} from './RequireChunks';

const routes = store => (
  <Route path="/" getComponent={app}>
    <IndexRoute getComponent={intro} />
    <Route path="todo" getComponent={todo} store={store} />
    <Route path="intro" getComponent={intro} />
  </Route>
);

export default { routes };
