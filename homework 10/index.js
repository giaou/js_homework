console.log("Hello world");

//10c
const testBtn = document.querySelector(".js-button");
const isContainingClass = testBtn.classList.contains("js-button");
console.log(isContainingClass);

//10d
const gamingBtn = document.querySelector(".js-gaming");
const musicBtn = document.querySelector(".js-music");
const techBtn = document.querySelector(".js-tech");

function isToggled(strClass) {
  const btn = document.querySelector(strClass);

  if (btn.classList.contains("is-toggled")) {
    btn.classList.remove("is-toggled");
    return;
  }
  turnOffPreviousBtn();
  btn.classList.add("is-toggled");
}

function turnOffPreviousBtn() {
  const previousBtn = document.querySelector(".is-toggled");
  if (previousBtn) {
    previousBtn.classList.remove("is-toggled");
  }
}
