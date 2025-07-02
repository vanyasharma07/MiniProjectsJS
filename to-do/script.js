document.addEventListener('DOMContentLoaded', () => {
const todoInput = document.getElementById("todo-input");
const addTaskButton = document.getElementById("add-task-btn");
const todoList = document.getElementById("todo-list");

let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

addTaskButton.addEventListener('click', () => {
    const taskText = todoInput.value.trim()
    if(taskText === "") return;

    const newTask = {
        id: Date.now(),
        text: taskText,
        completed: false
    };
    tasks.push(newTask);
    saveTasks();
    todoInput.value = "";
    console.log(tasks);
});
//now we have created an array where we can add tasks

function saveTasks(){
    localStorage.setItem('tasks', JSON.stringify(tasks));
}
});