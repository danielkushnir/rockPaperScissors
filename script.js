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
            return "You lose! Paper beats rock.";
        } else {
            return "You win! Rock beats scissors.";
        }
    } else if (playerSelection.toLowerCase() === 'paper') {
        if (compuerSelection === 'rock') {
            return "You win! Paper beats rock.";
        } else if (compuerSelection === 'paper') {
            return "It's a tie!";
        } else {
            return "You lose! Scissors beats paper";
        }
    } else {
        if (compuerSelection === 'rock') {
            return "You lose! Rock beats scissors";
        } else if (compuerSelection === 'paper') {
            return "You win! Scissors beats paper.";
        } else {
            return "It's a tie!";
        }
    }
}