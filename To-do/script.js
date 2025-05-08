const input = document.getElementById('task-input');
const addBtn = document.getElementById('add-btn');
const taskList = document.getElementById('task-list');

let tasks = JSON.parse(localStorage.getItem('tasks')) || [];

function renderTasks() {
  taskList.innerHTML = '';
  tasks.forEach((task, index) => {
    const li = document.createElement('li');
    li.textContent = task;

    const delBtn = document.createElement('button');
    delBtn.textContent = 'Delete';
    delBtn.className = 'delete-btn';
    delBtn.onclick = () => {
      tasks.splice(index, 1);
      updateLocalStorage();
      renderTasks();
    };

    li.appendChild(delBtn);
    taskList.appendChild(li);
  });
}

function updateLocalStorage() {
  localStorage.setItem('tasks', JSON.stringify(tasks));
}

addBtn.addEventListener('click', () => {
  const task = input.value.trim();
  if (task !== '') {
    tasks.push(task);
    updateLocalStorage();
    renderTasks();
    input.value = '';
  }
});

input.addEventListener('keypress', (e) => {
  if (e.key === 'Enter') {
    addBtn.click();
  }
});

// Initial render
renderTasks();
