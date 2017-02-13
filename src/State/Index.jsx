import { observable } from 'mobx';

class App {
    @observable todoList = [];
}

export const app = new App();
