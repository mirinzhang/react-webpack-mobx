/**
 * Created by Min on 2016/11/21.
 * Todo state
 */
import { observable } from 'mobx';

export default class Todos {
  @observable todoList = [];

  @observable
  addList(param) {
    this.todoList.push(param);
  }

  @observable
  removeList(index) {
    this.todoList.splice(index, 1);
  }
}
