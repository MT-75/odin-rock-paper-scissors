/*
For now, I don't need an user interface. The game will play entirely in the
console.
This program will have only one input: the user's choice.
The output is the winner of a round, so the computer choice has to be random.
The entire game consist of 5 rounds, so the program has to output the winner of
the game.
So I need to create a function to get the user's choice, a function to get
the computer's choice, a function to play a round with those results, and finally
the function to play the entire game of 5 rounds and announce the winner.
*/

/*
Function getComputerChoice
    Calculate computer choice with Math.random method
    Return calculated value
End
*/

function getComputerChoice() {
    let number = Math.floor(Math.random() * 100);
    console.log(number);
    if (number <= 33) {
        return "Rock";
    } else if (number <= 66) {
        return "Paper";
    } else {
        return "Scissor";
    }
}