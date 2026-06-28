const modal = document.getElementById('modal');
const todoList = document.getElementById('todoList');
const taskInput = document.getElementById('taskInput');
const saveTask = document.getElementById('saveTask');

// Modalni ochish/yopish
document.getElementById('openModal').onclick = () => modal.style.display = 'flex';
document.getElementById('cancelModal').onclick = () => modal.style.display = 'none';

// Vazifa qo'shish
saveTask.onclick = () => {
    const taskText = taskInput.value;
    if (taskText === "") return alert("Iltimos, vazifani yozing!");

    const div = document.createElement('div');
    div.className = 'todo-item';
    div.innerHTML = `
        <span>${taskText}</span>
        <button class="delete-btn">🗑</button>
    `;

    // O'chirish funksiyasi
    div.querySelector('.delete-btn').onclick = () => div.remove();

    todoList.appendChild(div);
    taskInput.value = "";
    modal.style.display = 'none';
};