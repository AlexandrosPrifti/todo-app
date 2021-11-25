let modal = window.document.getElementById('todo-modal');
let addTodoBtn = window.document.getElementById('add-todo-btn');
let closeModalBtn = window.document.getElementById('close-modal-btn');

addTodoBtn.addEventListener('click', (ev) => {
    // modal.classList.add('open');
    modal.style.display = 'block';
});

closeModalBtn.addEventListener('click', (ev) => {
    // modal.classList.remove('open');
    modal.style.display = 'none';
});
