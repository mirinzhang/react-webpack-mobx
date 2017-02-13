/**
 * Created by Min on 2017/2/9.
 */
import React from 'react';
import { Route, IndexRoute } from 'react-router';

import {
    main,
    intro,
    todo,
} from './Chunks';

const routes = params => (
    <Route path="/" getComponent={main}>
        <IndexRoute getComponent={intro} />
        <Route path="/intro" getComponent={intro} params={params} />
        <Route path="/todo" getComponent={todo} params={params} />
    </Route>
);

export default { routes };
