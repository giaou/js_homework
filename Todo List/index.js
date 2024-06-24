//declare the task list
let todoList = [
  {
    name: "Do Laundry",
    due: "06/23/2024",
  },
  {
    name: "Wash Dishes",
    due: "06/27/2024",
  },
];

//get the value of the task name

const displayElm = document.querySelector(".js-display-task");

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
  let htmlText = "";

  //add the todo list to the html text
  for (let i = 0; i < todoList.length; i++) {
    const taskObj = todoList[i];
    let { name, due } = taskObj;

    const task = `<p>${name} ${due} <button class="js-delete" onclick="deleteTask(${i})">Delete</button></p>`;
    console.log(i);

    htmlText += task;
  }

  displayElm.innerHTML = htmlText;
}

//delete task
function deleteTask(index) {
  todoList.splice(index, 1);

  //render the list
  displayTasks();
}

