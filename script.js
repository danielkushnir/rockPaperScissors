function getComputerChoice() {
    let computerChoiceNum = Math.floor(Math.random() * 3) + 1;
    if (computerChoiceNum === 1) {
        return "rock";
    } else if (computerChoiceNum === 2) {
        return "paper";
    } else {
        return "scissors";
    }
}

function playRound(playerSelection, compuerSelection) {
    if (playerSelection.toLowerCase() === 'rock') {
        if (compuerSelection === 'rock') {
            return "It's a tie!";
        } else if (compuerSelection === 'paper') {
            return "You lose this round!";
        } else {
            return "You win this round!";
        }
    } else if (playerSelection.toLowerCase() === 'paper') {
        if (compuerSelection === 'rock') {
            return "You win this round!";
        } else if (compuerSelection === 'paper') {
            return "It's a tie!";
        } else {
            return "You lose this round!";
        }
    } else if (playerSelection.toLowerCase() === 'scissors') {
        if (compuerSelection === 'rock') {
            return "You lose this round!";
        } else if (compuerSelection === 'paper') {
            return "You win this round!";
        } else {
            return "It's a tie!";
        }
    }
}

function game() {
    let playerScore = 0;
    let computerScore = 0;
    for (let i = 0; i < 5; i++) {
        console.log(`Round ${i+1}`);
        console.log(`Player score: ${playerScore}`);
        console.log(`Computer score: ${computerScore}`);
        let computerSelection = getComputerChoice();
        let playerSelection = prompt("Rock/paper/scissors?");
        let roundResult = playRound(playerSelection, computerSelection);
        if (roundResult === "You win this round!") {
            playerScore++;
            console.log(`${roundResult} ${playerSelection} beats ${computerSelection}.`);
        } else if (roundResult === "You lose this round!") {
            computerScore++;
            console.log(`${roundResult} ${computerSelection} beats ${playerSelection}.`);
        } else if (roundResult === "It's a tie!") {
            console.log(`${roundResult}`);
        } else {
            alert("Please enter a valid choice");
            i--;
        }
    }
    console.log(`Player score: ${playerScore}`);
    console.log(`Computer score: ${computerScore}`);
    if (playerScore > computerScore) {
        console.log("You won the game!");
    } else if (playerScore < computerScore) {
        console.log("You lost the game!");
    } else {
        console.log("It's a tie!");
    }
}

game();