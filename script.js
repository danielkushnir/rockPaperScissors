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

function playRound(playerSelection, computerSelection) {
    if (playerSelection.toLowerCase() === computerSelection) {
        console.log("It's a tie!");
        return "It's a tie!";
    }
    if (playerSelection.toLowerCase() === 'rock') {
        if (computerSelection === 'paper') {
            console.log("You lose this round!");
            return "You lose this round!";
        } else {
            console.log("You win this round!");
            return "You win this round!";
        }
    } else if (playerSelection.toLowerCase() === 'paper') {
        if (computerSelection === 'rock') {
            console.log("You win this round!");
            return "You win this round!";
        } else {
            console.log("You lose this round!");
            return "You lose this round!";
        }
    } else if (playerSelection.toLowerCase() === 'scissors') {
        if (computerSelection === 'rock') {
            console.log("You lose this round!");
            return "You lose this round!";
        } else {
            console.log("You win this round!");
            return "You win this round!";
        }
    }
}

const playerBtns = document.querySelectorAll("#playerBtns button");
playerBtns.forEach(btn => btn.addEventListener('click', () => playRound(btn.textContent, getComputerChoice())));