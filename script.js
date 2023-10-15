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
    for (i=0; i<5; i++) {
        playerSelection = prompt('Choose your move!');
        computerSelection = getComputerChoice();
        winner = playRound(playerSelection, computerSelection);
        console.log(winner);
        if (winner.startsWith('You win!')) {
            userscore++;
        } else if (winner.startsWith('You lose!')) {
            computerScore++
        }
    }
    if (userscore>computerScore) {
        console.log('You win!')
    } else if (computerScore>userscore) {
        console.log('You lose!')
    } else {
        console.log("It's a tie!")
    }
}

game()