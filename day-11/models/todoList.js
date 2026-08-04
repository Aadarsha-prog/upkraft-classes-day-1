import { Todo } from "./todo.js";
import { createNewTodoElement } from "../ui.js";
class TodoList {
  constructor() {
    this.todos = [];
  }

  addTodo(text) {
    const id = crypto.randomUUID();
    const newTodo = new Todo(id, text, false);
    this.todos.push(newTodo);

    return newTodo;
  }

  markTodoAsCompleted(todoId) {
    const todo = this.todos.find((t) => t.id === todoId);
    if (!todo) {
      return;
    }
    todo.completed = true;
  }
}

export const todoListInstance = new TodoList();
