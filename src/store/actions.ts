import Actions from './../enums/Actions';
import TodoItemInterface from './../types/TodoItemInterface';

const { ADD_TODO } = Actions;

export default {
  ADD_TODO: ({ commit }: any, todo: TodoItemInterface) => {
    commit(ADD_TODO, todo);
  },
};
