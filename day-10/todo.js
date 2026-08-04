const form = document.querySelector("form");
const input = document.querySelector("#todo-input");
const todoList = document.querySelector("#todo-list");
const clearTodosButton = document.querySelector("#clear-todos");

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

  if (inputValue.trim() === "") {
    alert("Empty todo cannot be added.");
    return;
  }

  createNewTodoInUI(inputValue);

  todos.push(inputValue);

  localStorage.setItem("todos", JSON.stringify(todos));

  input.value = ""; // Clear the input field after adding the todo item
});

clearTodosButton.addEventListener("click", () => {
  todos = [];
  localStorage.removeItem("todos");
  todoList.innerHTML = ""; // Clear the UI
});

function createNewTodoInUI(todo) {
  const li = document.createElement("li");
  const p = document.createElement("p");
  p.textContent = todo;

  li.appendChild(p);
  todoList.appendChild(li);
}
