import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';

import '../Style/App';

export default class App extends Component {
  static propTypes = {
    children: PropTypes.element,
  };

  render() {
    return (
      <div className="container">
        <h1>React & mobx</h1>
        <h3>
          <Link to="/intro">Intro</Link>
          <Link to="/todo">Todo</Link>
        </h3>
        {this.props.children}
      </div>
    );
  }
}
