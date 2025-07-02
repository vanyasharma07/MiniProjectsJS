document.addEventListener('DOMContentLoaded', () => { //all things run once dom is completely loaded
const todoInput = document.getElementById("todo-input"); //grabbing the elements jinpe kaam
const addTaskButton = document.getElementById("add-task-btn");
const todoList = document.getElementById("todo-list");

let tasks = JSON.parse(localStorage.getItem("tasks")) || []; //in array named tasks, either store the values iin local storage if available, or keep it empty

tasks.forEach((task) => renderTask(task)); //har ek task(object) in array{local storage} task ke liye render function ko call karo {this is for when the dom page is loaded}

addTaskButton.addEventListener('click', () => { //add task button ko click krne par kya hoga
    const taskText = todoInput.value.trim() //input ki value ko ek variable mein store kr diya
    if(taskText === "") return; //if input has no value the no action

    const newTask = { //we create an object with text value = input wali value, and unique id and completion status
        id: Date.now(),
        text: taskText,
        completed: false
    };
    tasks.push(newTask); //new task object ko array mein push krdo ---> [{...},{...},...]
    saveTasks(); // this function will save our task object in local storage (function is defined later)
    renderTask(newTask);// call render function every time a new task is added
    todoInput.value = "";//ek baar render krne ke baad input clear krdo
    console.log(tasks);//console mein array show ho jata hai 
});
//now we have created an array where we can add tasks

function renderTask(task){//now whatever the task is, we have to show it on the screen
    const li = document.createElement("li");//create a list item and storing it in a variable named "li"
    li.setAttribute("data-id", task.id);//we set an attribute i.e. id to the list item which has the value of task's id
    if (task.completed){//agar task complete ho jata hai, completed: true
        li.classList.add("completed");//add a css class="completed" to the list item
    };
    li.innerHTML = `
    <span>${task.text}</span> 
    <button>delete</button>`;//list item mein we add text and a dalete button (already styled)
    li.addEventListener("click", (e) => { 
        if(e.target.tagName === 'BUTTON'){ //agar button pr click karein to no action
            return;
        };
        //else
        task.completed = !task.completed ; //true ko false & vice-versa
        li.classList.toggle('completed');//list mein completed on-off krte rehna
        saveTasks();//in sabko save in local storage
    });

    li.querySelector('button').addEventListener('click', (e) => { // event if we click on button
        e.stopPropagation(); //to avoid bubbling
        tasks = tasks.filter(t => t.id !== task.id); //Keep all the tasks except the one I clicked on
        li.remove();//remove that list item
        saveTasks();
    })

    todoList.appendChild(li);//add li item to to-do list
}

function saveTasks(){
    localStorage.setItem('tasks', JSON.stringify(tasks));// save tasks in local storage 
}
});