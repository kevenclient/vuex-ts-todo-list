import TodoItemInterface from './../types/TodoItemInterface';
import Status from './../enums/Status';

export const ADD_TODO = 'ADD_TODO';
export const UPDATE_TODO = 'UPDATE_TODO';
export const DELETE_TODO = 'DELETE_TODO';

export default {
  [ADD_TODO]: ({ commit }: any,
    todo: TodoItemInterface): void => {
    commit(ADD_TODO, todo);
  },
  [UPDATE_TODO]: ({ commit }: any,
    data: {todo: TodoItemInterface, status: Status}): void => {
    commit(UPDATE_TODO, data);
  },
  [DELETE_TODO]: ({ commit }: any,
    todo: TodoItemInterface): void => {
    commit(DELETE_TODO, todo);
  },
};
