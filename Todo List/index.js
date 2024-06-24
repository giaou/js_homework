//declare the task list
let todoList = JSON.parse(localStorage.getItem("todolist")) || [];

displayTasks();

//get the value of the task name

//add task
function addTask() {
  const nameElm = document.querySelector(".js-name-input");
  const name = nameElm.value;
  nameElm.value = "";

  const dateElm = document.querySelector(".js-date-input");
  const due = dateElm.value;
  dateElm.value = null;

  todoList.push({ name, due });

  //render the list
  displayTasks();
}

//display task
function displayTasks() {
  const displayElm = document.querySelector(".js-display-task");
  let htmlText = "";

  //add the todo list to the html text
  for (let i = 0; i < todoList.length; i++) {
    const taskObj = todoList[i];
    let { name, due } = taskObj;

    const task = `
    
<div>${name}</div> 
<div>${due}</div>
<button class="js-delete delete" onclick="deleteTask(${i})">Delete</button>`;

    console.log(i);

    htmlText += task;
  }

  displayElm.innerHTML = htmlText;

  //save updated todoList into localstorage
  localStorage.setItem("todolist", JSON.stringify(todoList));
}

//delete task
function deleteTask(index) {
  todoList.splice(index, 1);

  //render the list
  displayTasks();
}
