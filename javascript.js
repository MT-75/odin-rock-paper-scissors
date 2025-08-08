function getComputerChoice() {
    let computerChoice = Math.floor(Math.random() * 100); // With Math.random() method we can get random choices. //
    if (computerChoice <= 33) {
        return "Rock";
    } else if (computerChoice <= 66) {
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

function playRound (humanChoice, computerChoice) {
    let humanWinText = `${humanChoice} beats ${computerChoice}. Human wins this round!`;
    let computerWinText = `${computerChoice} beats ${humanChoice}. Computer win this round!`;
    if(humanChoice === computerChoice) {
        console.log("It's a tie!");
    } else {
        switch (humanChoice) {
            case "Rock":
                if (computerChoice === "Scissor") {
                    humanScore += 1;
                    console.log(humanWinText);
                } else {
                    computerScore += 1;
                    console.log(computerWinText);
                }
                break
            case "Paper":
                if (computerChoice === "Rock") {
                    humanScore += 1;
                    console.log(humanWinText);
                } else {
                    computerScore += 1;
                    console.log(computerWinText);
                }
                break
            case "Scissor":
                 if (computerChoice === "Paper") {
                    humanScore += 1;
                    console.log(humanWinText);
                } else {
                    computerScore += 1;
                    console.log(computerWinText);
                }
                break
        }
    }
}

