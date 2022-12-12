let winCounter = 0;
let lossCounter = 0;
let tieCounter = 0;

function rock() {
    playRound('Rock', getComputerChoice());
    const score = document.querySelector('#score');
    score.textContent = "Wins:  " + winCounter + "  Losses:  " + lossCounter + "  Ties:  " + tieCounter;

}

function paper() {
    playRound('Paper', getComputerChoice());
    const score = document.querySelector('#score');
    score.textContent = "Wins:  " + winCounter + "  Losses:  " + lossCounter + "  Ties:  " + tieCounter;
}

function scissors() {
    playRound('Scissors', getComputerChoice());
    const score = document.querySelector('#score');
    score.textContent = "Wins:  " + winCounter + "  Losses:  " + lossCounter + "  Ties:  " + tieCounter;
}


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

    if (x == 'Rock' && y == 'Paper') {
        lossCounter++;
        return 'You Lose! Paper beats Rock.';
    } else if (x == 'Rock' && y == 'Scissors') {
        winCounter++;
        return 'You Win! Rock beats Scissors!';
    } else if (x == 'Paper' && y == 'Scissors') {
        lossCounter++;
        return 'You Lose! Scissors beats Paper.';
    } else if (x == 'Paper' && y == 'Rock') {
        winCounter++;
        return 'You Win! Paper beats Rock!';
    } else if (x == 'Scissors' && y == 'Rock') {
        lossCounter++;
        return 'You Lose! Rock beats Scissors.';
    } else if (x == 'Scissors' && y == 'Paper') {
        winCounter++;
        return 'You Win! Scissors beats Paper!';
    } else if (x == 'Scissors' && y == 'Scissors') {
        tieCounter++;
        return 'You tied!';
    } else if (x == 'Rock' && y == 'Rock') {
        tieCounter++;
        return 'You tied!';
    } else if (x == 'Paper' && y == 'Paper') {
        tieCounter++;
        return 'You tied!';
    }
}

//const computerSelection = getComputerChoice();
//console.log(playRound(playerSelection, computerSelection));


//console.log(`Wins: ${winCounter} "Losses: ${lossCounter} Ties: ${tieCounter}`);