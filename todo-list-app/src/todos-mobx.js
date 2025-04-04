import { makeAutoObservable } from 'mobx';
import { deleteTodo } from './todosSlice';

class TodosStore {
  todos = [];

  constructor() {
    makeAutoObservable(this);
  }

  createTodo(text) {}

  markTodoAsCompleted(text) {}

  deleteTodo(text) {}
}

export default new TodosStore();
