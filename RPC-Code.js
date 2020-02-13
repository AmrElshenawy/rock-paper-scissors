function computerPlay() {
    let handOptions = ["ROCK", "PAPER", "SCISSORS"];
    return handOptions[Math.floor(Math.random() * 3)];
}

function playRound(playerSelection, computerSelection) {
    if(playerSelection === "ROCK" && computerSelection === "SCISSORS") {
        return [1, "You win! Rock beats Scissors."];
    }
    else if(playerSelection === "SCISSORS" && computerSelection === "ROCK") {
        return [-1, "You lose! Rock beats Scissors."];
    }

    if(playerSelection === "SCISSORS" && computerSelection === "PAPER") {
        return [1, "You win! Scissors beats Paper."];
    }
    else if(playerSelection === "PAPER" && computerSelection === "SCISSORS") {
        return [-1, "You lose! Scissors beats Paper."];
    }

    if(playerSelection === "PAPER" && computerSelection === "ROCK") {
        return [1, "You win! Paper beats Rock."];
    }
    else if(playerSelection === "ROCK" && computerSelection === "PAPER") {
        return [-1, "You lose! Paper beats Rock."];
    }

    if(playerSelection === computerSelection) {
        return [0, "Draw! You both played the same."];
    }
}

function game() {
    let roundLimit = 5;
    let roundResults;
    let winCounter = 0;
    let playerSelection;
    let computerSelection;

    for(i = 1; i <= roundLimit; i++) {
        playerSelection = prompt("Please type in a play - Rock, Paper or Scissors.", '').toUpperCase();
        computerSelection = computerPlay();
        roundResults = playRound(playerSelection, computerSelection);
        winCounter += roundResults[0];
        console.log(roundResults[1]);
        console.log(`Current win status is ${winCounter} in round ${i}`); 
    }

    if(winCounter > 0) {
        alert("Congrats! You won the game!");
    }
    else if(winCounter < 0) {
        alert("Darn! You lost the game!");
    }
    else {
        alert("The game ended in a draw! GGWP!")
    }
}

game();

