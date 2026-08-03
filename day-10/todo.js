const form = document.querySelector("form");
const input = document.querySelector("#todo-input");
const todoList = document.querySelector("#todo-list");

const localTodos = localStorage.getItem("todos");

let todos = [];

try {
  if (localTodos) {
    const parsedTodos = JSON.parse(localTodos);
    if (Array.isArray(parsedTodos)) {
      todos = parsedTodos;
    }
  }
} catch (error) {
  console.error("Error parsing todos from localStorage:", error);
}

todos.forEach((todo) => {
  createNewTodoInUI(todo);
});

form.addEventListener("submit", (event) => {
  event.preventDefault();

  // Get the input value
  const inputValue = input.value;

  createNewTodoInUI(inputValue);

  todos.push(inputValue);

  localStorage.setItem("todos", JSON.stringify(todos));

  input.value = ""; // Clear the input field after adding the todo item
});

function createNewTodoInUI(todo) {
  const li = document.createElement("li");
  const p = document.createElement("p");
  p.textContent = todo;

  li.appendChild(p);
  todoList.appendChild(li);
}
