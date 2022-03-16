let playerElements = {
    boxes: document.querySelectorAll(".box.human"),
    choice: document.querySelector("#humanChoice") ,
    score : document.querySelector(".human.scorepoints")
};
let computerElements = {
    boxes: document.querySelectorAll(".box.computer"),
    choice: document.querySelector("#computerChoice"),
    score: document.querySelector(".computer.scorepoints")
};
let middleText = document.getElementById('middleText')
let playerScore = 0;
let computerScore = 0;
let options = ['rock', 'paper', 'scissors'];
options.forEach(option => document.getElementById(option).addEventListener('click', playRound));

function playRound(element) {
    // Randomly chooses one element from array for computer
    function computerPlay() {
        let i = Math.floor(Math.random() * (2 - 0 + 1))
        return options[i]
    }

    //Checks who's the winner of the round
    function roundWinner() {
        if (playerSelection == 'rock') {
            if (computerSelection == 'scissors') {
                return true
            }
            else if (computerSelection == 'paper') {
                return false
            }
            else if (computerSelection == 'rock') {
                return null
            }
        }
        else if (playerSelection == 'paper') {
            if (computerSelection == 'rock') {
                return true
            }
            else if (computerSelection == 'scissors') {
                return false
            }
            else if (computerSelection == 'paper') {
                return null
            }
        } else if (playerSelection == 'scissors') {
            if (computerSelection == 'paper') {
                return true
            }
            else if (computerSelection == 'rock') {
                return false
            }
            else if (computerSelection == 'scissors') {
                return null
            }
        }
    }

    let playerSelection = element.target.id;
    let computerSelection = computerPlay();
    playerElements.choice.src = `imgs/rps/${playerSelection}.png`;
    computerElements.choice.src = `imgs/rps/${computerSelection}.png`;
    switch(roundWinner()) {
        case true: 
        playerScore++
        middleText.textContent = `${playerSelection} wins ${computerSelection}!`;
        playerElements.boxes.forEach(box => box.style.backgroundColor = "#689612");
        playerElements.score.textContent = playerScore;
        computerElements.boxes.forEach(box => box.style.backgroundColor = "#962812");
        break;

        case false: 
        computerScore++
        middleText.textContent = `${playerSelection} loses to ${computerSelection}!`;
        computerElements.boxes.forEach(box => box.style.backgroundColor = "#689612");
        computerElements.score.textContent = computerScore;
        playerElements.boxes.forEach(box => box.style.backgroundColor = "#962812");
        break;

        case null: 
        middleText.textContent = "Tie!";
        playerElements.boxes.forEach(box => box.style.backgroundColor = "#689612");
        computerElements.boxes.forEach(box => box.style.backgroundColor = "#689612");
         break;
    };
};