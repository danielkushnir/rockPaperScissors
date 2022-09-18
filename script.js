let playerScore = 0;
const playerScorePara = document.querySelector("#playerScore");
let computerScore = 0;
const computerScorePara = document.querySelector("#computerScore");


function getComputerChoice() {
    const computerOptions = ['rock', 'paper', 'scissors'];
    return computerOptions[Math.floor(Math.random() * 3)];
}

function tieRound() {
    results.textContent = "It's a tie!";
}

function playerWinsRound() {
    results.textContent = "You win this round!";
    playerScore++;
    playerScorePara.textContent = `Player Score: ${playerScore}`;
    if (playerScore === 5) {
        results.textContent = "Game over! You win the game!";
    }
}

function computerWinsRound() {
    results.textContent = "You lose this round!";
    computerScore++;
    computerScorePara.textContent = `Computer Score: ${computerScore}`;
    if (computerScore === 5) {
        results.textContent = "Game over! You lose the game!";
    }
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection.toLowerCase() === computerSelection) {
        tieRound();
    } else if ((playerSelection.toLowerCase() === 'rock' && computerSelection === 'scissors') ||
    (playerSelection.toLowerCase() === 'paper' && computerSelection === 'rock') ||
    (playerSelection.toLowerCase() === 'scissors' && computerSelection === 'paper')) {
        playerWinsRound();
    } else {
        computerWinsRound();
       
        
    }
            
}

const results = document.querySelector("#results");

const playerBtns = document.querySelectorAll("#playerBtns button");
playerBtns.forEach(btn => btn.addEventListener('click', () => playRound(btn.textContent, getComputerChoice())));