// Randomly chooses one of the values of 'possibilities'
function computerPlay() {
   let i = Math.floor(Math.random() * (2 - 0 + 1))
   const possibilities = ['rock', 'paper', 'scissors']
   return possibilities[i]
}

//Checks who's the winner of the round
function round(playerSelection, computerSelection) {
    
    playerSelection = playerSelection.toLowerCase()
    if(playerSelection == 'rock') {
        if(computerSelection == 'paper') return 'You Win' 
        else if (computerSelection == 'scissors') return 'You Lose'
        else if (computerSelection == 'rock') return 'Tie'
    }
    else if(playerSelection == 'paper') {
        if(computerSelection == 'paper') return 'Tie'
        else if (computerSelection == 'scissors') return 'You Lose' 
        else if (computerSelection == 'rock') return 'You win'
    }
    else if(playerSelection == 'scissors') {
        if(computerSelection == 'paper') return 'You Win'
        else if (computerSelection == 'scissors') return 'Tie' 
        else if (computerSelection == 'rock') return 'You Lose'
    }
}
