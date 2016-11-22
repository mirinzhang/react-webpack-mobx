# react-webpack-mobx
> 使用`Mobxjs`替代`Redux`进行状态管理。

#### 使用

> `git clone https://github.com/ybing/react-webpack-mobx.git`
>
> `cd react-webpack-mobx`
>
> `yarn install` 或 `npm install`
>
> `npm run dev`

#### 说明

> `@decorators`(装饰器)目前在`ES2015`中是无法直接使用的，需要`babel-plugin-transform-decorators-legacy`插件来进行转换，同时需要在`.babelrc`中进行配置(`"plugins": ["transform-decorators-legacy"]`)。

> 在`react`中绑定`onClick`等事件时经常需要像这样`onClick={this.submit.bind(this)}`这样将`this`进行手动绑定，这里使用`autobind-decorator`来做简化:

##### 例子

```javascript
import React, {Component} from 'react';
import {observer} from 'mobx-react';
import autobind from 'autobind-decorator';

@observer
export default class Todos extends Component {
    
    @autobind
    onPress(event){
        console.info(event.target.value);
    }
    
    render(){
        return (
            <div className="todo-container">
                <input type="text" placeholder="Please input" onKeyPress={this.onPress}/>
            </div>
        )
    }
}
```
