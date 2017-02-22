/**
 * Created by Min on 2017/2/9.
 */
import { observer } from 'mobx-react';
import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';

import '../Style/Main';

@observer
export default class Main extends Component {
    static propTypes = {
        children: PropTypes.element,
    };

    static contextTypes = {
        router: PropTypes.object.isRequired,
    };

    render() {
        return (
            <div className="container">
                <header>
                    <h3>React Boilerplate</h3>
                </header>
                <main>
                    <div className="menu">
                        <Link to="/intro">Intro</Link>
                        <Link to="/todo">Todo</Link>
                    </div>
                    <div className="sub-item">
                        {this.props.children}
                    </div>
                </main>
            </div>
        );
    }
}
