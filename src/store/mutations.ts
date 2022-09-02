import StateInterface from './../types/StateInterface';
import TodoItemInterface from './../types/TodoItemInterface';

export default {
  ADD_TODO: (state: StateInterface, todo: TodoItemInterface) => {
    state.todos.push(todo);
  },
};
