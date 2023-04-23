const todoForm = document.getElementById('todo-form');
const todoInput = document.getElementById('todo-input');
const todoList = document.getElementById('todo-list');

todoForm.addEventListener('submit', (event) => {
  event.preventDefault();
  const task = todoInput.value.trim();
  if (task !== '') {
    addTask(task);
    todoInput.value = '';
  }
});

todoList.addEventListener('click', (event) => {
  if (event.target.classList.contains('delete')) {
    deleteTask(event.target.parentElement);
  } else if (event.target.classList.contains('task')) {
    toggleTaskStatus(event.target);
  }
});

function addTask(task) {
  const li = document.createElement('li');
  li.innerHTML = `
    <span class="task">${task}</span>
    <button class="delete">Delete</button>
  `;
  todoList.appendChild(li);
}

function deleteTask(taskItem) {
  taskItem.remove();
}

function toggleTaskStatus(taskItem) {
  taskItem.classList.toggle('completed');
}
