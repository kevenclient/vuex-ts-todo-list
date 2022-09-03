import StateInterface from './../types/StateInterface';
import TodoItemInterface from './../types/TodoItemInterface';
import { ADD_TODO, UPDATE_TODO } from './actions';
import Status from './../enums/Status';

export default {
  [ADD_TODO]: ({ todos }: StateInterface,
    todo: TodoItemInterface): void => {
    todos.push(todo);
  },
  [UPDATE_TODO]: ({ todos }: StateInterface,
    {todo, status}: {todo: TodoItemInterface, status: Status}): void => {
    const index = todos.indexOf(todo);
    todos.splice(index, 1);
    todos.push({...todo, status});
  },
};
