import React, { Component } from 'react';

export default class Second extends Component {
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
