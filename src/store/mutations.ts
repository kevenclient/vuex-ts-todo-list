import StateInterface from './../types/StateInterface';
import TodoItemInterface from './../types/TodoItemInterface';
import { ADD_TODO, UPDATE_TODO } from './actions';
import Status from './../enums/Status';

export default {
  [ADD_TODO]: (state: StateInterface, todo: TodoItemInterface): void => {
    state.todos.push(todo);
  },
  [UPDATE_TODO]: (state: StateInterface, {todo, status}: {todo: TodoItemInterface, status: Status}): void => {
    const index = state.todos.indexOf(todo);
    state.todos.splice(index, 1, {...todo, status});
  },
};
