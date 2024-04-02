import {makeAutoObservable} from "mobx";


export default class GlobalStore {
    todos: string[] = [];

    constructor() {
        makeAutoObservable(this);
    }

    setToDos(things: string[]) {
        this.todos = things;
    }
}