import React, { Component } from 'react';

export default class Intro extends Component {
  render() {
    return (
      <div className="intro-container">
        <div className="intro">
          <h3>描述：react项目基本结构</h3>
          <h3>技术栈：react + react-router + mobxjs</h3>
          <h3>工具：webpack + eslint + babel</h3>
        </div>
      </div>
    );
  }
}
