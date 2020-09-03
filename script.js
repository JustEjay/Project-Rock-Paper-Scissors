// Computer selects Rock, Paper or Scissors
function computerPlay() {
    // Generate random number 
let randomNum = Math.floor(Math.random() * 3);
// use random number to select Rock, Paper or Scissors
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
