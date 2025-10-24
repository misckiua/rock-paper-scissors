"use strict";

const MAX_POINTS = 5;
const ROCK_EMOJI = "✊";
const PAPER_EMOJI = "✋";
const SCISSORS_EMOJI = "✌️";

const buttons = document.querySelector("#buttons");
const humanChoiceDisplay = document.querySelector("#human-choice-display");
const computerChoiceDisplay = document.querySelector("#computer-choice-display");
const humanScoreDisplay = document.querySelector("#human-score");
const computerScoreDisplay = document.querySelector("#computer-score");
const winnerOfRoundDisplay = document.querySelector("#winner-info");
const reasonOfWinDisplay = document.querySelector("#winner-msg");

reasonOfWinDisplay.textContent = `First to ${MAX_POINTS} wins the game!`;

const modal = document.querySelector("#modal-container");
const retryModalButton = modal.querySelector("#retry-modal-button");
const endGameWinnerDisplay = modal.querySelector("#end-game-winner");
const endGameMessage = modal.querySelector("#end-game-msg");

let humanScore = 0, computerScore = 0;
let isGameOver = false;

retryModalButton.addEventListener("click", () => {
  showModal(false);
  initializer();
});

buttons.addEventListener("click", (event) => {
  if (!isGameOver) {
    const buttonPressed = event.target.id;
    // Just a temporary fix for the font size..
    computerChoiceDisplay.style.fontSize = "100px";
    humanChoiceDisplay.style.fontSize = "100px";
    playRound(buttonPressed, getComputerChoice());
  }
});

function initializer() {
  isGameOver = false;
  humanScore = 0;
  computerScore = 0;

  winnerOfRoundDisplay.textContent = "Choose your weapon..";
  reasonOfWinDisplay.textContent = `First to ${MAX_POINTS} wins the game!`;
  
  humanChoiceDisplay.textContent = "?";
  computerChoiceDisplay.textContent = "?";
  humanChoiceDisplay.style.fontSize = "115px";
  computerChoiceDisplay.style.fontSize = "115px";

  humanScoreDisplay.textContent = `You: ${humanScore}`;
  computerScoreDisplay.textContent = `Computer: ${computerScore}`;
}

function showModal(boolean, winner) {
  if (boolean) {
    modal.classList.add("active");

    if (winner === "human") {
      modal.classList.add("win");
      endGameWinnerDisplay.textContent = "You win!";
      endGameMessage.textContent = "Nice one! Play again?";
    } else {
      modal.classList.add("lose");
      endGameWinnerDisplay.textContent = "You lost..";
      endGameMessage.textContent = "Better luck next time.."
    }

  } else {
    modal.classList.remove("active", "win", "lose");
  }
}

function getComputerChoice() {
  let randomNumber = Math.floor(Math.random() * 3) + 1;

  return (randomNumber === 1) ? "rock" :
  (randomNumber === 2) ? "paper" :
  "scissors";
}


function playRound(humanChoice, computerChoice) {
  humanChoice = humanChoice.toLowerCase();

  if (humanChoice == computerChoice) {
    humanChoiceDisplay.textContent = (humanChoice === "rock") ? ROCK_EMOJI :
    (humanChoice === "paper") ? PAPER_EMOJI :
    SCISSORS_EMOJI;

    computerChoiceDisplay.textContent = (computerChoice === "rock") ? ROCK_EMOJI :
    (computerChoice === "paper") ? PAPER_EMOJI :
    SCISSORS_EMOJI;

    winnerOfRoundDisplay.textContent = "Tie!";
    reasonOfWinDisplay.textContent = "No one won!";

  } else if (humanChoice == "rock") {
    humanChoiceDisplay.textContent = ROCK_EMOJI;

    if (computerChoice == "paper") {

      computerChoiceDisplay.textContent = PAPER_EMOJI;
      winnerOfRoundDisplay.textContent = "You lose!";
      reasonOfWinDisplay.textContent = "Paper eats rock!";

      computerScoreDisplay.textContent = `Computer: ${++computerScore}`;

    } else if (computerChoice == "scissors") {

      computerChoiceDisplay.textContent = SCISSORS_EMOJI;
      winnerOfRoundDisplay.textContent = "You win!";
      reasonOfWinDisplay.textContent = "Rock destroys scissors!";

      humanScoreDisplay.textContent = `You: ${++humanScore}`;

    }

  } else if (humanChoice == "paper") {
    humanChoiceDisplay.textContent = PAPER_EMOJI;

    if (computerChoice == "rock") {

      computerChoiceDisplay.textContent = ROCK_EMOJI;
      winnerOfRoundDisplay.textContent = "You win!";
      reasonOfWinDisplay.textContent = "Paper eats rock!";

      humanScoreDisplay.textContent = `You: ${++humanScore}`

    } else if (computerChoice == "scissors") {

      computerChoiceDisplay.textContent = SCISSORS_EMOJI;
      winnerOfRoundDisplay.textContent = "You lose!";
      reasonOfWinDisplay.textContent = "Scissors slice paper!";

      computerScoreDisplay.textContent = `Computer: ${++computerScore}`;

    }

  } else if (humanChoice == "scissors") {
    humanChoiceDisplay.textContent = SCISSORS_EMOJI;

    if (computerChoice == "rock") {

      computerChoiceDisplay.textContent = ROCK_EMOJI;
      winnerOfRoundDisplay.textContent = "You lose!";
      reasonOfWinDisplay.textContent = "Rock destroys scissors!";

      computerScoreDisplay.textContent = `Computer: ${++computerScore}`;

    } else if (computerChoice == "paper") {

      computerChoiceDisplay.textContent = PAPER_EMOJI;
      winnerOfRoundDisplay.textContent = "You win!";
      reasonOfWinDisplay.textContent = "Scissors slice paper!";

      humanScoreDisplay.textContent = `You: ${++humanScore}`;

    }
  }

  if (humanScore >= MAX_POINTS || computerScore >= MAX_POINTS) {
    isGameOver = true;
    showModal(true, (humanScore > computerScore) ? "human" : "computer");
  }
}

