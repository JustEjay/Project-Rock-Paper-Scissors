function computerPlay() {
    let randomNum = Math.floor(Math.random() * 3);
    switch (randomNum) {
        case 0 :
            return 'rock';
            break;
        case 1 :
            return 'paper';
            break;
        case 2 : 
            return 'scissors';
        }
}

let playerScore = 0;
let computerScore = 0; 
let playerSelection
let computerSelection

// Play one round 
function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection){
        return console.log('TIE!!');
    } else if (playerSelection === 'rock'){
        if(computerSelection === 'scissors'){
            playerScore ++
            return console.log('You win! Rock beats Scissors');
        }else {
            computerScore ++
            return console.log('You lose :( Paper beats rock');
        }
    } else if (playerSelection === 'paper'){
        if (computerSelection === 'rock'){
            playerScore ++
            return console.log('You win! Paper beats Rock');
        } else {
            computerScore ++
            return console.log('You lose :( Scissors beats Paper');
        }
    }  else if (playerSelection === 'scissors') {
        if (computerSelection === "paper"){
            playerScore++
            return console.log('You win! Scissors beats Paper');
        } else {
            computerScore ++ 
            return console.log('You lose :( Rock beats Scissors');
        }
    } else {
        return console.log('not a valid input');
    }
}


// play round on loop 
function game(){
    for(i = 0; i< 5; i++){
        playerSelection = prompt('Rock, Paper or Scissors ?').toLowerCase();
        computerSelection = computerPlay();
        playRound(playerSelection, computerSelection);
        console.log(`Player Score = ${playerScore} Computer Score = ${computerScore}`);
    }
    // Show winner
    winner(playerScore, computerScore);
    // Reset Score
    playerScore = 0;
    computerScore = 0;
}

 // Compare playerScore and computerScore then decides winner
function winner(playerScore, computerScore){
    if (playerScore > computerScore) {
        alert('YOU WIN!!!!!!!!!');
    } else if (playerScore < computerScore){
        alert('BIG LOSER!!!!');
    } else {
        alert('Never had a tie before hmmmmmm type game(); to replay');
    }
}






