function renderTodos(todosList) {
    const mainElement = document.querySelector("main");
    for (let todo of todosList) {
        const todoElement = document.createElement('div');
        todoElement.innerHTML = todoHtml(todo); // todo.title;
        mainElement.appendChild(todoElement);
    }
}

function todoHtml (todoObject) {
    const { title, description, done } = todoObject;
    const descriptionHtml = description ? `<p>${description}</p>` : ''; 
    const bg = done === true ? "bg-orange" : "bg-grey";

    return `
        <section class="${bg} todo-block">
            <div>
                <span class="todo-block-img">
                    <img src="https://cdn-icons.flaticon.com/png/512/3001/premium/3001764.png?token=exp=1636023080~hmac=a00ae20c1e0bed75a12dfdec837e3d09" 
                    alt="animals">
                </span>
            </div>
            <div>
                <h3>${title}</h3>
                ${descriptionHtml}
            </div>
            <div>10:00 AM</div>
        </section>
    
    `
}

function addTodoToHtml(todoObject) {
    renderTodos([todoObject]);
}

document.addEventListener("DOMContentLoaded", function() {
    let modal = window.document.getElementById('todo-modal');
    let addTodoBtn = window.document.getElementById('add-todo-btn');
    let closeModalBtn = window.document.getElementById('close-modal-btn');
    let formElement = window.document.querySelector("#add-todo-form");

    let todos = [
        {
            title: "My first todo", 
            description: "",
            done: false,
            dueDate: new Date()
        },
        {
            title: "My second todo", 
            description: "Oti na nai",
            done: false,
            dueDate: new Date('2021-12-12 21:12:12')
        }, 
        {
            title: "My second todo", 
            description: "Oti na nai",
            done: false,
            dueDate: new Date('2021-12-12 21:12:12')
        }, 
    ];

    function closeModal(mod) {
        mod.style.display = 'none';
    }

    function openModal(mod) {
        mod.style.display = 'block';
    }

    renderTodos(todos);

    addTodoBtn.addEventListener('click', (ev) => {
        // modal.classList.add('open');
        // modal.style.display = 'block';
        openModal(modal);
    });
    
    closeModalBtn.addEventListener('click', (ev) => {
        // modal.classList.remove('open');
        // modal.style.display = 'none';
        closeModal(modal)
    });
    console.log({formElement})
    
    formElement.addEventListener('submit', (ev) => {
        ev.preventDefault();
        const title = formElement.title.value;
        const description = formElement.description.value;
        const done = formElement.done.checked;
        const todo = {
            title,
            description,
            done
        }
        todos.push(todo);
        addTodoToHtml(todo);
        formElement.reset();
        closeModal(modal);  
    });
    
});

// function openModal() {}
// function closeModal() {}
// function addTodo() {}
// function addTodoToHtml() {}
// function toggleTodoDone() {} 

