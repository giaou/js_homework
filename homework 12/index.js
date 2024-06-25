//12a
const add = function () {
  console.log(2 + 3);
};

/*test the variable*/
//   add();
//   add();

//12b
function runTwice(fun) {
  fun();
  fun();
}

/*test the function*/
// runTwice(add);
// runTwice(function () {
//   console.log("12b");
// });

//12c-d
function onStartOG() {
  const startBtn = document.querySelector(".js-start-btn");
  startBtn.innerHTML = "Loading...";
  setTimeout(() => (startBtn.innerHTML = "Finished!"), 1000);
}

//12e-f
let timeoutID;
function addToCartOG() {
  const textElm = document.querySelector(".js-add-to-cart-text");
  clearTimeout(timeoutID);

  textElm.innerHTML = "Added";
  timeoutID = setTimeout(() => (textElm.innerHTML = ""), 2000);
}

//12g-h-i
let intervalId;
let messages = 2;
function changeTitleOG(num) {
  if (messages + num >= 0) {
    messages += num;
  }
  clearInterval(intervalId);
  intervalId = setInterval(() => {
    if (document.title === "Homework 12" && messages > 0) {
      document.title = `(${messages}) New messages`;
    } else document.title = "Homework 12";
  }, 1000);
}

//12j-k
const multiply = (a, b) => a * b;

console.log(multiply(2, 3));
console.log(multiply(7, 10));

//12l
function countPositive(nums) {
  let count = 0;
  nums.forEach((value) => {
    if (value > 0) count++;
  });

  return count;
}

// console.log(countPositive([1, -3, 5]));
// console.log(countPositive([-2, 3, -5, 7, 10]));

//12m
function addNum(array, num) {
  return array.map((value) => value + num);
}

//console.log(addNum([1, 2, 3], 2));

//12n
const eggHam = ["egg", "apple", "egg", "egg", "ham"];

function removeEgg(foods) {
  return foods.filter((value) => {
    return value != "egg";
  });
}

console.log(removeEgg(eggHam));

//12o
function removeFirst2Eggs(foods) {
  let count = 0;
  return foods.filter((value) => {
    if (value === "egg" && count < 2) {
      count++;
      return false;
    }
    return true;
  });
}

console.log(removeFirst2Eggs(eggHam));

document
  .querySelector(".js-start-btn")
  .addEventListener("click", () => onStartOG());

document
  .querySelector(".js-add-to-cart-btn")
  .addEventListener("click", () => addToCartOG());

document
  .querySelector(".js-add-msg")
  .addEventListener("click", () => changeTitleOG(1));

document
  .querySelector(".js-remove-msg")
  .addEventListener("click", () => changeTitleOG(-1));


//Note: from 12r-12x looks for rock paper scissor project
