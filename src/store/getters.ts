import TodoItemInterface from './../types/TodoItemInterface';
import StateInterface from './../types/StateInterface';
import Status from './../enums/Status';

export const TODOS = 'TODOS';
export const CLOSED = 'CLOSED';

export default {
  [TODOS]: ({ todos }: StateInterface): Array<TodoItemInterface> => {
    return todos.filter(todo => todo.status === Status.OPEN);
  },
  [CLOSED]: ({ todos }: StateInterface): Array<TodoItemInterface> => {
    return todos.filter(todo => todo.status === Status.CLOSED);
  },
};
