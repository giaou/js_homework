const score = JSON.parse(localStorage.getItem("score")) || {
  wins: 0,
  losses: 0,
  ties: 0,
};

displayScore();

document.body.addEventListener("keydown", (event) => {
  if (event.key === " ") {
    displayWarning();
  } else if (event.key === "a") {
    autoPlay();
  }
});

const rockBtn = document
  .querySelector(".js-rock")
  .addEventListener("click", () => play("rock"));

const paperBtn = document
  .querySelector(".js-paper")
  .addEventListener("click", () => play("paper"));

const scissorsElm = document
  .querySelector(".js-scissors")
  .addEventListener("click", () => play("scissors"));

const resetEle = document
  .querySelector(".js-reset")
  .addEventListener("click", () => displayWarning());

const autoElm = document
  .querySelector(".js-auto")
  .addEventListener("click", () => autoPlay());

let intervalID;
let isAutoPlay = false;

function autoPlay() {
  const autoBtn = document.querySelector(".js-auto");
  //clear interval
  clearInterval(intervalID);

  if (isAutoPlay === false) {
    autoBtn.innerHTML = "Stop Playing";
    intervalID = setInterval(() => {
      const playerMove = NPCMove();
      play(playerMove);
    }, 1000);
    isAutoPlay = true;
  } else {
    isAutoPlay = false;
    autoBtn.innerHTML = "Auto Play";
  }
}

function play(playerMove) {
  let result = "";
  const npcMove = NPCMove();

  if (playerMove === npcMove) result = "Tie.";
  else if (
    (playerMove === "rock" && npcMove === "scissors") ||
    (playerMove === "scissors" && npcMove === "paper") ||
    (playerMove === "paper" && npcMove === "rock")
  )
    result = "You win.";
  else result = "You lose.";

  //render result here
  const resultElm = document.querySelector(".js-result");
  resultElm.innerHTML = result;

  //render moves here
  const movesElm = document.querySelector(".js-moves");
  movesElm.innerHTML = `You <img
        src="/rock paper scissors/images/${playerMove}-emoji.png"
        class="move-icon"
      /> <img
        src="/rock paper scissors/images/${npcMove}-emoji.png"
        class="move-icon"
      /> NPC`;

  //update score
  if (result === "You win.") score.wins += 1;
  else if (result === "You lose.") score.losses += 1;
  else score.ties += 1;

  displayScore();
}

function NPCMove() {
  const rand = Math.random();
  let npcMove = "";

  if (0 <= rand && rand < 1 / 3) npcMove = "rock";
  else if (1 / 3 <= rand && rand < 2 / 3) npcMove = "paper";
  else npcMove = "scissors";

  return npcMove;
}

function displayScore() {
  //update score on the play game screen
  const scoreElm = document.querySelector(".js-scores");
  const { wins, losses, ties } = score;
  scoreElm.innerHTML = `Wins: ${wins}, Losses: ${losses}, Ties: ${ties}`;

  //save score to localStorage
  localStorage.setItem("score", JSON.stringify(score));
}

function reset() {
  score.wins = 0;
  score.losses = 0;
  score.ties = 0;

  displayScore();
}

function displayWarning() {
  const warningElm = document.querySelector(".js-warning-msg");
  warningElm.innerHTML = `Are you are you want to reset the score?   <button class="js-yes yes">Yes</button> <button class="js-no no">No</button>`;

  const yesBtn = document
    .querySelector(".js-yes")
    .addEventListener("click", () => {
      warningElm.innerHTML = "";
      reset();
    });

  const noBtn = document
    .querySelector(".js-no")
    .addEventListener("click", () => (warningElm.innerHTML = ""));
}
