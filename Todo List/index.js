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

//display task
function displayTasks() {
  let htmlText = "";

  //add the todo list to the html text
  for (let i = 0; i < todoList.length; i++) {
    const taskObj = todoList[i];
    let { name, due } = taskObj;

    const task = `<p>${name} ${due} <button class="js-delete">Delete</button></p>`;

    htmlText += task;
  }

  displayElm.innerHTML = htmlText;
}

displayTasks();
