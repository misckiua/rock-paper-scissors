const getComputerChoice = () => Math.floor(Math.random() * 3) + 1;
const getHumanChoice = () => prompt("Rock, Paper or Scissors?").toLowerCase();