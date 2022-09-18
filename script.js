const playerScorePara = document.querySelector("#playerScore");
const computerScorePara = document.querySelector("#computerScore");
let playerScore;
let computerScore;
resetGame();

function getComputerChoice() {
    const computerOptions = ['rock', 'paper', 'scissors'];
    return computerOptions[Math.floor(Math.random() * 3)];
}

function resetGame() {
    playerScore = 0;
    playerScorePara.textContent = `Player Score: ${playerScore}`;
    computerScore = 0;
    computerScorePara.textContent = `Computer Score: ${computerScore}`;
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
    if (playerScore === 5 || computerScore === 5) resetGame();
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

resetGame();
const results = document.querySelector("#results");

const playerBtns = document.querySelectorAll("#playerBtns button");
playerBtns.forEach(btn => btn.addEventListener('click', () => playRound(btn.textContent, getComputerChoice())));