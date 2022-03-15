let options = ['rock', 'paper', 'scissors']
options.forEach(option => document.getElementById(option).addEventListener('click', game))
function game(element) {
    // Randomly chooses one element from array for computer
    function computerPlay() {
        let i = Math.floor(Math.random() * (2 - 0 + 1))
        return options[i]
    }

    //Checks who's the winner of the round
    function round() {
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
    let computerSelection = computerPlay()
    switch(round()) {
        case true: 
        
        break;
        case false: 

        break;
        case null: 

         break;
    }
}