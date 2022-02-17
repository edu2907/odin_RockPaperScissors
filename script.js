// Randomly chooses one element from array for computer
function computerPlay() {
    let i = Math.floor(Math.random() * (2 - 0 + 1))
    const possibilities = ['rock', 'paper', 'scissors']
    return possibilities[i]
}
function game() {
    //Checks who's the winner of the round
    function round(playerSelection, computerSelection) {

        playerSelection = playerSelection.toLowerCase()
        if (playerSelection == 'rock') {
            if (computerSelection == 'paper') return true
            else if (computerSelection == 'scissors') return false
            else if (computerSelection == 'rock') return null
        }
        else if (playerSelection == 'paper') {
            if (computerSelection == 'paper') return null
            else if (computerSelection == 'scissors') return 'You Lose'
            else if (computerSelection == 'rock') return 'You win'
        }
        else if (playerSelection == 'scissors') {
            if (computerSelection == 'paper') return 'You Win'
            else if (computerSelection == 'scissors') return 'Tie'
            else if (computerSelection == 'rock') return 'You Lose'
        }
    }
    let playerScore = 0
    let computerScore = 0
    for(i = 0; i < 5; i++) {
        let roundResult = round(computerPlay(), computerPlay())
        if (roundResult == true) playerScore++
        else if (roundResult == false) computerScore++
        else continue
    }
    return [playerScore, computerScore]
}
console.log(game())