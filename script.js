const rock = document.querySelector("#rock");
const paper = document.querySelector("#paper");
const scissors = document.querySelector("#scissors");
const results = document.querySelector("#results");
const score = document.querySelector("#score");
results.setAttribute('style', 'white-space: pre;');

function capitalise(string) {
    return string.toUpperCase()[0] + string.toLowerCase().slice(-string.length+1);
}

function getComputerChoice() {
    const choice = Math.floor(Math.random() * 3);
    if (choice === 0) {
        return "Rock";
    } else if (choice === 1) {
        return "Paper";
    } else {
        return "Scissors";
    }
}

function playRound(playerSelection, computerSelection) {
    const player = capitalise(playerSelection);
    const computer = capitalise(computerSelection);
    if (player===computer) {
        return `It's a tie!(${player} ties ${computer})`;
    } else if (player==='Rock' && computer==='Scissors' || player==='Paper' && computer==='Rock' || player==='Scissors' && computer==='Paper') {
        return `You win! ${player} beats ${computer}`;
    } return `You lose! ${computer} beats ${player}`;
}

function game(){
    let playerSelection;
    let computerSelection;
    let winner;
    let userscore = 0;
    let computerScore = 0;

    document.addEventListener('click', (e) => {
        if (['rock', 'paper', 'scissors'].includes(e.target.getAttribute('id'))) {
            computerSelection = getComputerChoice();
            winner = playRound(e.target.getAttribute('id'), computerSelection);
            results.textContent = winner;
            if (winner.startsWith('You win!')) {
                userscore++;
            } else if (winner.startsWith('You lose!')) {
                computerScore++;
            }
            if (userscore === 5 || computerScore === 5){
                if (userscore>computerScore) {
                    results.textContent += '\r\nPlayer won!';
                    userscore = 0;
                    computerScore = 0;
                } else if (computerScore>userscore) {
                    results.textContent += '\r\nComputer won!';
                    userscore = 0;
                    computerScore = 0;
                }
            }
            score.textContent = `${userscore} - ${computerScore}`
        }
    })
}

game();