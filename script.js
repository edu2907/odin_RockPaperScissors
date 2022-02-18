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
        playerSelection = prompt(`Round ${i + 1}\nRock Paper Scissors!`)
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
            if (computerSelection == 'scissors') {
                alert("Rock wins Scissors!")
                return true
            }
            else if (computerSelection == 'paper') {
                alert("Rock loses to Paper!")
                return false
            }
            else if (computerSelection == 'rock') {
                alert("Tie!")
                return null
            }
        }
        else if (playerSelection == 'paper') {
            if (computerSelection == 'rock') {
                alert("Paper wins Rock!")
                return true
            }
            else if (computerSelection == 'scissors') {
                alert("Papers loses to Scissors!")
                return false
            }
            else if (computerSelection == 'paper') {
                alert("Tie!")
                return null
            }
        }
        else if (playerSelection == 'scissors') {
            if (computerSelection == 'paper') {
                alert("Scissors wins Paper!")
                return true
            }
            else if (computerSelection == 'rock') {
                alert("Scissors loses to Rock!")
                return false
            }
            else if (computerSelection == 'scissors') {
                alert("Tie!")
                return null
            }
        }
    }
    //Name says all about 
    function scoreChecker(score1, score2) {
        if (score1 > score2) return "Player"
        else if (score2 > score1) return "Computer"
        else return "Tie"
    }
    // Where game() function actually starts
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
    return score = {
        Player: playerScore,
        Computer: computerScore,
        Winner: scoreChecker(playerScore, computerScore)
    }
}

console.table(game())