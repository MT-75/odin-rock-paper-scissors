function getComputerChoice() {
    let number = Math.floor(Math.random() * 100); // With Math.random() method we can get random choices. //
    if (number <= 33) {
        return "Rock";
    } else if (number <= 66) {
        return "Paper";
    } else {
        return "Scissor";
    }
}

function getHumanChoice() {
    let humanChoice = prompt("Chose rock, paper or Scissor");
    humanChoice = humanChoice.toLowerCase(); // With this line the user's input is case insensitive. //
    humanChoice = humanChoice.slice(0,1).toUpperCase() + humanChoice.slice(1); // Capitalized string. //
    return humanChoice;
} 

let humanScore = 0;
let computerScore = 0;

