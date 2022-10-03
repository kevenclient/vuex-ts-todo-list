import StateInterface from './../types/StateInterface';
import TodoItemInterface from './../types/TodoItemInterface';
import { CREATE_TODO, UPDATE_TODO, DELETE_TODO } from './actions';
import Status from './../enums/Status';

const mutations = {
  [CREATE_TODO]: ({ todos }: StateInterface,
    todo: TodoItemInterface): void => {
    todos.push(todo);
  },
  [UPDATE_TODO]: (state: StateInterface,
    {todo, status}: {todo: TodoItemInterface, status: Status}): void => {
    mutations[DELETE_TODO](state, todo);
    mutations[CREATE_TODO](state, {...todo, status});
  },
  [DELETE_TODO]: ({ todos }: StateInterface,
    todo: TodoItemInterface): void => {
    const index = todos.indexOf(todo);
    todos.splice(index, 1);
  },
};

export default mutations;
