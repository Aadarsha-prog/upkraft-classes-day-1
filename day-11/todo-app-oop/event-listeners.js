import { todoForm, todoInput, todoListContainer, clearAllButton } from './selectors.js';
import { renderTodo } from './ui.js';
import { todoList } from './models/todoList.js';

export const initEventListeners = () => {
    todoForm.addEventListener('submit', (event) => {
        event.preventDefault();
        const todoText = todoInput.value.trim();

        if (!todoText) return;

        const newTodo = todoList.addTodo(todoText);
        renderTodo(newTodo);
        todoInput.value = '';
    });

    todoListContainer.addEventListener('change', (event) => {
        if (event.target.type === 'checkbox') {
            const liElement = event.target.closest('li');
            const todoId = Number(liElement.dataset.id);

            const targetTodo = todoList.todos.find((todo) => todo.id === todoId);
            if (targetTodo) {
                targetTodo.toggleCompleted();
            }

            liElement.classList.toggle('completed', event.target.checked);
        }
    });

    todoListContainer.addEventListener('click', (event) => {
        if (event.target.tagName === 'BUTTON') {
            const liElement = event.target.closest('li');
            const todoId = Number(liElement.dataset.id);

            todoList.removeTodo(todoId);
            liElement.remove();
        }
    });

    clearAllButton.addEventListener('click', () => {
        todoList.clearTodo();
        todoListContainer.replaceChildren();
    });
};