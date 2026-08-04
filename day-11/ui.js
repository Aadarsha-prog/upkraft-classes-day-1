import { todoList } from "./selectors.js";

export function createNewTodoElement(todo) {
  const li = document.createElement("li");
  const p = document.createElement("p");
  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  const div = document.createElement("div");

  div.appendChild(p);
  p.textContent = todo.text;
  div.appendChild(checkbox);

  li.setAttribute("data-id", todo.id);

  li.appendChild(div);
  todoList.appendChild(li);
}
