const gamePlays = ["rock", "paper", "scissors"];
let playerScore = 0;
let computerScore = 0;


// This function picks a random item in the array "gamePlays"
function computerPlay() {
  return gamePlays[Math.floor(Math.random()*gamePlays.length)];
}

// This function computes the winner in a single game of rock, paper, scissors
function playRound(playerSelection, computerSelection) {
  if(playerSelection === computerSelection) {
    return "It's a tie"
  } else if(playerSelection === "rock" && computerSelection === "scissors") {
    return "Player Wins!"
  } else if(playerSelection === "paper" && computerSelection === "rock") {
    return "Player Wins!"
  } else if(playerSelection === "scissors" && computerSelection === "paper") {
    return "Player Wins!"
  } else {
    return "Computer Wins."
  }

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
// This function checks for the final winner of the game
function checkWinner() {
  if (playerScore > computerScore) {
    return "Player wins the game!"
  } else if (playerScore < computerScore) {
    return "Computer wins the game."
  } else {
    return "Player and Computer tie. "
  }
}
// This function resets the score after the game is done.
function scoreReset() {
  playerScore = 0;
  computerScore = 0;
}
// This function uses a for loop to play 5 rounds of rock,paper, scissors.
function game() {
  for (let i=0; i < 5; i++) {
    let playerSelection = prompt("Please Pick").toLowerCase();
    let computerSelection = computerPlay();
    console.log(playRound(playerSelection, computerSelection));
    scoreKeeper(playerSelection, computerSelection);
    console.log(`Score: ${playerScore}-${computerScore}`);
    
  }

  console.log(checkWinner());
  scoreReset();

}