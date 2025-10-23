"use strict";

const NUMBER_OF_ROUNDS = 5;

const buttons = document.querySelector("#buttons");

buttons.addEventListener("click", (event) => {
  const humanChoice = event.target.id;
  playRound(humanChoice, getComputerChoice());
});

function getComputerChoice() {
  let randomNumber = Math.floor(Math.random() * 3) + 1;

  return (randomNumber === 1) ? "rock" :
  (randomNumber === 2) ? "paper" :
  "scissors";
}

let humanScore = 0, computerScore = 0;

function playRound(humanChoice, computerChoice) {
  humanChoice = humanChoice.toLowerCase();

  if (humanChoice == computerChoice) {
    alert(`You chose: ${humanChoice}, Computer chose: ${computerChoice}.\nTie!`);

  } else if (humanChoice == "rock") {
    if (computerChoice == "paper") {
      alert("Computer chose paper..\nYou lose! Paper beats rock!");
      computerScore++;
    } else if (computerChoice == "scissors") {
      alert("Computer chose scissors..\n You win! Rock beats scissors!");
      humanScore++;
    }

  } else if (humanChoice == "paper") {
    if (computerChoice == "rock") {
      alert("Computer chose rock..\nYou win! Paper beats rock!");
      humanScore++;
    } else if (computerChoice == "scissors") {
      alert("Computer chose scissors..\nYou lose! Scissors beat paper!");
      computerScore++;
    }

  } else if (humanChoice == "scissors") {
    if (computerChoice == "rock") {
      alert("Computer chose rock..\nYou lose! Rock beats scissors!");
      computerScore++;
    } else if (computerChoice == "paper") {
      alert("Computer chose paper..\nYou win! Scissors beat paper!");
      humanScore++;
    }
  }
}

