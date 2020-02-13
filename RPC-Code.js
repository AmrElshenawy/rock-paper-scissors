function computerPlay() {
    let handOptions = ["ROCK", "PAPER", "SCISSORS"];
    return handOptions[Math.floor(Math.random()*3)];
}

function playRound(playerSelection, computerSelection) {
    if(playerSelection === "ROCK" && computerSelection === "SCISSORS") {
        return "You win! Rock beats Scissors."
    }
    else if(playerSelection === "SCISSORS" && computerSelection === "ROCK") {
        return "You lose! Rock beats Scissors."
    }

    if(playerSelection === "SCISSORS" && computerSelection === "PAPER") {
        return "You win! Scissors beats Paper."
    }
    else if(playerSelection === "PAPER" && computerSelection === "SCISSORS") {
        return "You lose! Scissors beats Paper."
    }

    if(playerSelection === "PAPER" && computerSelection === "ROCK") {
        return "You win! Paper beats Rock."
    }
    else if(playerSelection === "ROCK" && computerSelection === "PAPER") {
        return "You lose! Paper beats Rock."
    }

    if(playerSelection === computerSelection) {
        return "Draw! You both played the same."
    }

}


