console.log(document)

document.addEventListener("DOMContentLoaded", () => {
    let form = document.querySelector('form')
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const dueDate = document.getElementById("due-date").value;
        const priority = document.getElementById("priority").value;
        makeToDo(document.getElementById("new-task-description").value);
    })
})

function makeToDo(toDo) {
    let p = document.createElement('p');
    let btn = document.createElement("Button");
    btn.addEventListener('click', deleteTask);
    btn.textContent = 'Delete';
    p.textContent = `${toDo}`;
    p.appendChild(btn);
    console.log(p);
    document.querySelector('#list').appendChild(p);
}

document.getElementById("sort-tasks").addEventListener('click', sortTasks);

let tasks = [];


function deleteTask(e) {
    e.target.parentNode.remove();
}