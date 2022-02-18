const possibilities = ['rock', 'paper', 'scissors']
// Randomly chooses one element from array for computer
function computerPlay() {
    let i = Math.floor(Math.random() * (2 - 0 + 1))
    return possibilities[i]
}
// Main function
function game() {
    //Where player will type your choice
    function playerInput() {
        playerSelection = prompt("Rock Paper Scissors!")
        if (playerSelection == null) {
            alert("You cannot cancel!")
            return playerInput()
        }
        else {
            playerSelection = playerSelection.toLowerCase()
            if (playerSelection === possibilities[0] || playerSelection === possibilities[1] || playerSelection === possibilities[2]) return playerSelection

            else {
                alert('You typed wrong!\n You can only choose "rock", "paper" or "scissors". Try again!')
                return playerInput()
            }
        }
    }
    //Checks who's the winner of the round
    function round(playerSelection, computerSelection) {

        if (playerSelection == 'rock') {
            if (computerSelection == 'paper') return true
            else if (computerSelection == 'scissors') return false
            else if (computerSelection == 'rock') return null
        }
        else if (playerSelection == 'paper') {
            if (computerSelection == 'paper') return null
            else if (computerSelection == 'scissors') return false
            else if (computerSelection == 'rock') return true
        }
        else if (playerSelection == 'scissors') {
            if (computerSelection == 'paper') return true
            else if (computerSelection == 'scissors') return null
            else if (computerSelection == 'rock') return false
        }
    }

    let playerSelection;
    let playerScore = 0
    let computerScore = 0
    for (i = 0; i < 5; i++) {
        playerSelection = playerInput()
        let roundResult = round(playerSelection, computerPlay())
        if (roundResult == true) playerScore++
        else if (roundResult == false) computerScore++
        else continue
    }
    return [playerScore, computerScore]
}

console.log(game())