"use strict";

let humanScore = 0, computerScore = 0;

const getHumanChoice = () => prompt("Rock, Paper or Scissors?");

function getComputerChoice() {
  let randomNumber = Math.floor(Math.random() * 3) + 1;

  return (randomNumber === 1) ? "rock" :
  (randomNumber === 2) ? "paper" :
  "scissors";
}

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