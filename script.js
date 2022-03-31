let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:
const generateTarget = () => {
  return Math.floor(Math.random() * 10);
};

const compareGuesses = (humanGuess, computerGuess, targetGuess) => {
  Math.abs(targetGuess - humanGuess);
  if (
    Math.abs(targetGuess - humanGuess) > Math.abs(targetGuess - computerGuess)
  ) {
    return false;
  } else if (humanGuess === computerGuess) {
    return true;
  } else {
    return false;
  }
};
const updateScore = (winner) => {
  winner = "";
  if (winner === "human") {
    return (humanScore += 1);
  }
  if (winner === "computer") {
    return (computerScore += 1);
  }
};
const advanceRound = () => {
  currentRoundNumber += 1;
};
updateScore("human");
console.log(humanScore); // To confirm that this value increased by 1
updateScore("computer");
console.log(computerScore); // To confirm that this value increased by 1
