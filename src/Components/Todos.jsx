/**
 * Created by Min on 2016/11/21.
 * Todo example
 */
import React, { Component, PropTypes } from 'react';
import { observer } from 'mobx-react';
import autobind from 'autobind-decorator';

import '../Style/Todos';

@observer
export default class Todos extends Component {
  static propTypes = {
    route: PropTypes.shape({
      store: PropTypes.object.isRequired,
    }),
  };

  @autobind
  onPress(event) {
    if (event.key === 'Enter' && !!event.target.value) {
      const param = {
        text: event.target.value,
        createdTime: Date.now(),
      };

      this.props.route.store.addList(param);
      event.target.value = '';
    }
  }

  @autobind
  remove(index) {
    this.props.route.store.removeList(index);
  }

  render() {
    const { todoList } = this.props.route.store;
    return (
      <div className="todo-container">
        <ul>
          <li>
            <input
              type="text"
              placeholder="Please input"
              onKeyPress={this.onPress}
            />
          </li>
          {
            todoList.map((val, key) => (
              <li className="list" key={key}>
                {val.text}
                <button
                  onClick={() => this.remove(key)}
                >&times;</button>
              </li>
            ))
          }
        </ul>
      </div>
    );
  }
}
