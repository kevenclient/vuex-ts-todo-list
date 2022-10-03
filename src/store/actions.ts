import TodoItemInterface from './../types/TodoItemInterface';
import Status from './../enums/Status';

export const CREATE_TODO = 'CREATE_TODO';
export const UPDATE_TODO = 'UPDATE_TODO';
export const DELETE_TODO = 'DELETE_TODO';

export default {
  [CREATE_TODO]: ({ commit }: any,
    todo: TodoItemInterface): void => {
    commit(CREATE_TODO, todo);
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
