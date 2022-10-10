import { Todo } from "../../types/todo";

const todos: Todo[] = [];

export const getTodosMethod = (): Todo[] => {
  return todos;
};
export const getTodoByIdMethod = (id: string): Todo | undefined => {
  return todos.find((todo) => todo.id === id);
};

export const addTodoMethod = (todo: Todo): void => {
  todos.push(todo);
};
export const editTodoMethod = (id: string, todo: Todo): void => {
  const itemIndex = todos.findIndex((t) => t.id == id);
  let item = todos[itemIndex];
  item = todo;
  todos[itemIndex] = item;
};
export const deleteTodoMethod = (id: string): void => {
  const itemIndex = todos.findIndex((t) => t.id == id);
  if (itemIndex > -1) {
    todos.splice(itemIndex, 1);
  }
};
