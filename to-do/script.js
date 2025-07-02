const todoInput = document.getElementById("todo-input");
const addTaskButton = document.getElementById("add-task-btn");
const todoList = document.getElementById("todo-list");

let tasks =[];

addTaskButton.addEventListener('click', () => {
    const taskText = todoInput.ariaValueMax.trim()
    if(taskText === "") return;


})