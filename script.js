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