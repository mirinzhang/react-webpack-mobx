/**
 * Created by Min on 2017/2/9.
 */
import React, { Component } from 'react';
import { observer } from 'mobx-react';
import { app } from '../State/Index';

import '../Style/Todo';

@observer
export default class Todo extends Component {
    static onPress(event) {
        if (event.key === 'Enter' && !!event.target.value) {
            const param = {
                text: event.target.value,
                timeStamp: Date.now(),
            };

            app.todoList.push(param);
            event.target.value = '';
        }
    }

    static remove(index) {
        app.todoList.splice(index, 1);
    }

    render() {
        const { todoList } = app;
        return (
            <div className="todo-container">
                <ul>
                    <li>
                        <input
                            type="text"
                            placeholder="Please input"
                            onKeyPress={Todo.onPress} />
                    </li>
                    {
                        todoList.map((val, key) => (
                            <li className="list" key={val.timeStamp}>
                                {val.text}
                                <button
                                    onClick={() => Todo.remove(key)}
                                >&times;</button>
                            </li>
                        ))
                    }
                </ul>
            </div>
        );
    }
}
