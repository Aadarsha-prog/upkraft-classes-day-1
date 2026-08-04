import { todoListInstance } from "./models/todoList.js";
import { form, input, todoList } from "./selectors.js";
import { Todo } from "./models/todo.js";
import { createNewTodoElement } from "./ui.js";

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const inputValue = input.value;

  const addedTodo = todoListInstance.addTodo(inputValue);

  createNewTodoInUI(addedTodo);
});
