const getComputerChoice = () => Math.floor((Math.random() * 2) + 1);
const getHumanChoice = () => prompt("Rock, Paper or Scissors?").toLowerCase();