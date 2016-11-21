import React, {Component} from 'react';
import {Link} from 'react-router';

import '../style/App';

export default class App extends Component {
    render() {
        return (
            <div className="container">
                Default Page
                <Link to="/first">go first</Link>
                {this.props.children}
            </div>
        )
    }
}
