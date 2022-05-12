const gamePlays = ["Rock", "Paper", "Scissors"];
let playerScore = 0;
let computerScore = 0;

let computerSelection = computerPlay();
const rockBtn = document.querySelector('.rockBtn');
const paperBtn = document.querySelector('.paperBtn');
const scissorBtn = document.querySelector('.scissorBtn');

const container = document.querySelector('.container');
const playerSelectionContainer = document.querySelector('.player-selection');
const computerSelectionContainer = document.querySelector('.computer-selection');
const scoreContainer = document.querySelector('.score');
const winnerBox = document.querySelector('.winner-box');


// This adds an event listener to each button and runs respective function
rockBtn.addEventListener('click', playGameRock);
paperBtn.addEventListener('click', playGamePaper);
scissorBtn.addEventListener('click', playGameScissor);


// This function picks a random item in the array "gamePlays"
function computerPlay() {
  return gamePlays[Math.floor(Math.random()*gamePlays.length)];
}

// This function computes the winner in a single game of rock, paper, scissors
function playRound(playerSelection, computerSelection) {
  if(playerSelection === computerSelection) {
    return "It's a tie"
  } else if(playerSelection === "rock" && computerSelection === "Scissors") {
    return "Player Wins!"
  } else if(playerSelection === "paper" && computerSelection === "Rock") {
    return "Player Wins!"
  } else if(playerSelection === "scissors" && computerSelection === "Paper") {
    return "Player Wins!"
  } else {
    return "Computer Wins."
  };
};

// Function for when user chooses rock
function playGameRock() {
  let computerSelection = computerPlay();
  playerSelectionContainer.textContent = "Player Selection: Rock";
  computerSelectionContainer.textContent = `Computer Selection: ${computerSelection}`;
  scoreKeeper("rock", computerSelection);
  scoreContainer.textContent = `Score: ${playerScore}-${computerScore}`;
  checkWinner();
}
// Function for when user chooses paper
function playGamePaper() {
  let computerSelection = computerPlay();
  playerSelectionContainer.textContent = "Player Selection: Paper";
  computerSelectionContainer.textContent = `Computer Selection: ${computerSelection}`;
  scoreKeeper("paper", computerSelection);
  scoreContainer.textContent = `Score: ${playerScore}-${computerScore}`;
  checkWinner();

}

// Function for when user chooses scissors
function playGameScissor() {
  let computerSelection = computerPlay();
  playerSelectionContainer.textContent = "Player Selection: Scissors";
  computerSelectionContainer.textContent = `Computer Selection: ${computerSelection}`;
  scoreKeeper("scissors", computerSelection);
  scoreContainer.textContent = `Score: ${playerScore}-${computerScore}`;
  checkWinner();
}

// This function keeps score of the game.
function scoreKeeper(playerSelection, computerSelection) {
  if (playRound(playerSelection, computerSelection) == "Player Wins!") {
    return [playerScore+=1, computerScore];
  } else if (playRound(playerSelection, computerSelection) == "Computer Wins.") {
    return [playerScore, computerScore+=1];
  } else {
    return [playerScore, computerScore]
  }
}
// This function checks for the final winner of the game and reloads the page when there is a winner.
function checkWinner() {
  if (playerScore === 5) {
    alert(`Player Win. Score: ${playerScore}-${computerScore}`);
    scoreReset();
    window.location.reload();
  } else if (computerScore === 5) {
    alert (`Computer Win. Score: ${playerScore}-${computerScore}`)
    scoreReset();
    window.location.reload();
  }
};

// This function resets the score after the game is done.
function scoreReset() {
  playerScore = 0;
  computerScore = 0;
}
