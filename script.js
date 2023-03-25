function game() {
  for (let i = 0; i < 4; i++) {
    playerSelection = prompt("Lets play! Enter rock, papper or scissors"); //define player, player input

    console.log("you choose " + playerSelection.toLowerCase()); //show user input in lowercase

    computerSelection = ["rock", "paper", "scissors"]; //update computerSelection
    computerPlay = Math.floor(Math.random() * computerSelection.length); //update computerPlay

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
