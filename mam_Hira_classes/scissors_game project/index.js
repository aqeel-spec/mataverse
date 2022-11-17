import randomInteger from "random-int";
import PromptSync from "prompt-sync";
// user choices
const choices = ["scissors", "paper", "rock"];
// Statement to ask user for input
let stateForUserInput = "Please select , 0 scissore , 1 paper , 2 rude ";

const prompt = PromptSync();
const userSelection = prompt(stateForUserInput);
const userChoice = choices[userSelection];

let outcome = "Ready to play.";

// geenerates random number between 0 and in de upto 2
const computerSelection = randomInteger(0, 2);
const computerSelectionByName = choices[computerSelection];

if (computerSelectionByName === userChoice) {
  outcome = "Draw";
} else if (computerSelectionByName === "rock" && userChoice === "paper") {
  outcome = "Player Wins";
} else if (computerSelectionByName === "rock" && userChoice === "scissors") {
  outcome = "Computer Wins";
} else if (computerSelectionByName === "paper" && userChoice === "rock") {
  outcome = "Computer Wins";
} else if (computerSelectionByName === "paper" && userChoice === "scissors") {
  outcome = "Player Wins";
} else if (computerSelectionByName === "scissors" && userChoice === "rock") {
  outcome = "Player Wins";
} else if (computerSelectionByName === "scissors" && userChoice === "paper") {
  outcome = "Computer Wins";
} else {
  outcome = "Invalid entry. Please try again.";
}
console.log("Computer chooses " + computerSelectionByName);
console.log("Player chooses " + userChoice);
console.log(outcome);
