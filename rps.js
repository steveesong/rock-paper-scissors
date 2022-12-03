const buttons = document.querySelectorAll('input');

let winCounter = 0;
let lossCounter = 0;
let tieCounter = 0; 

for (let i = 0; i < 9; i++) {

    function choice() {
        answer = input;

    function getComputerChoice() {    
        function randomNumber(min, max) {
            min = Math.ceil(min);
            max = Math.floor(max);
            return Math.floor(Math.random() * (max - min + 1)) + min;
        }

        let random = randomNumber(1, 3);
        
        if (random === 3) {
            return "Rock";
        } else if (random === 2) {
            return "Paper";
        } else if (random === 1) {
            return "Scissors";
        }
    }

    function playRound(x, y) {

        if (x =='Rock' && y =='Paper') {
            return 'You Lose! Paper beats Rock.';
        } else if (x =='Rock' && y =='Scissors') {
            return 'You Win! Rock beats Scissors!';
        } else if (x =='Paper' && y =='Scissors') {
            return 'You Lose! Scissors beats Paper.';
        } else if (x =='Paper' && y =='Rock') {
            return 'You Win! Paper beats Rock!';
        } else if (x =='Scissors' && y =='Rock') {
            return 'You Lose! Rock beats Scissors.';
        } else if (x =='Scissors' && y =='Paper') {
            return 'You Win! Scissors beats Paper!';
        } else if (x =='Scissors' && y =='Scissors') {
            return 'You tied!';
        } else if (x =='Rock' && y =='Rock') {
            return 'You tied!';
        } else if (x =='Paper' && y =='Paper') {
            return 'You tied!';    
        } else {
            return 'Please pick Rock, Paper, or Scissors!';
        }   
    }

    const computerSelection = getComputerChoice();
    const playerSelection = choice();
    console.log(playRound(playerSelection, computerSelection));

    if (playerSelection == 'Rock' && computerSelection == 'Scissors' || 
        playerSelection == 'Paper' && computerSelection == 'Rock' ||
        playerSelection == 'Scissors' && computerSelection == 'Paper') {
            winCounter++;
    } else if (playerSelection == 'Rock' && computerSelection == 'Paper' || 
            playerSelection == 'Paper' && computerSelection == 'Scissors' ||
            playerSelection == 'Scissors' && computerSelection == 'Rock') {
            lossCounter++;
    } else if (playerSelection == computerSelection) {
            tieCounter++;
    }
    if (winCounter === 3) {
        console.log("You Win the match!");
        break;
    } else if (lossCounter === 3) {
        console.log("You've lost the match!");
        break;
    }
}  
console.log(`Wins: ${winCounter} "Losses: ${lossCounter} Ties: ${tieCounter}`);