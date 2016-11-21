import React from 'react';
import {render} from 'react-dom';

import First from './components/First.jsx';
import Second from './components/Second.jsx';

render (
    <div>
        <First />
        <Second />
    </div>,
    document.getElementById('app')
);
