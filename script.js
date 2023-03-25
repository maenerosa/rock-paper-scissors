function playRound(playerSelection, computerSelection) {
  if (
    (playerSelection.toLowerCase() == "rock" &&
      computerSelection[computerPlay] == "scissors") ||
    (playerSelection.toLowerCase() == "paper" &&
      computerSelection[computerPlay] == "rock") ||
    (playerSelection.toLowerCase() == "scissors" &&
      computerSelection[computerPlay] == "paper")
  ) {
    playerScore++;
    return win;
  } else if (
    (playerSelection.toLowerCase() == "rock" &&
      computerSelection[computerPlay] == "paper") ||
    (playerSelection.toLowerCase() == "scissors" &&
      computerSelection[computerPlay] == "rock") ||
    (playerSelection.toLowerCase() == "paper" &&
      computerSelection[computerPlay] == "scissors")
  ) {
    computerScore++;
    return lose;
  } else if (playerSelection.toLowerCase() == computerSelection[computerPlay]) {
    tieScore++;
    return tie;
  } 
  else {
    return "Error please input rock, paper or scissors";
  } /
}

let playerSelection = prompt("Please input rock, paper or scissors"); 

console.log("you choose " + playerSelection.toLowerCase()); 

let computerSelection = ["rock", "paper", "scissors"];
let computerPlay = Math.floor(Math.random() * computerSelection.length); 
console.log(
  "The computer choose " + computerPlay,
  computerSelection[computerPlay]
);

let playerScore = 0;
let computerScore = 0;
let tieScore = 0;

const win = "You Win this round!\n -------"; 
const lose = "You Lose this round!\n -------"; 
const tie = "This round is a tie!\n -------"; 

console.log(playRound(playerSelection, computerSelection));

function game() {
  for (let i = 0; i < 4; i++) {

    playerSelection = prompt("lets play rock papper scissors"); 

    console.log("you choose " + playerSelection.toLowerCase());

    computerSelection = ["rock", "paper", "scissors"]; 
    computerPlay = Math.floor(Math.random() * computerSelection.length); 

    console.log(
      "The computer choose " + computerPlay,
      computerSelection[computerPlay]
    ); 

    console.log(playRound(playerSelection, computerSelection));
  }
  if (playerScore > computerScore) {
    return "You Win this game.\n -------";
  }
  if (playerScore == computerScore) {
    return "This game is a tie.\n -------";
  } else {
    return "You Lose this game.\n -------";
  }
}

console.log(game());

console.log(
  "Your final score is " +
    playerScore +
    " wins " +
    computerScore +
    " loses and " +
    tieScore +
    " draws.\n -------"
);

score = playerScore + computerScore + tieScore;

console.log("You played this game " + score + " times.\n -------\nGame over.");
