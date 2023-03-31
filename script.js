const rock = document.querySelector("#rock");
const paper = document.querySelector("#paper");
const scissors = document.querySelector("#scissors");

const results = document.querySelector("#results");
const score = document.querySelector("#score");

let playerTotal = 0;
let computerTotal = 0;

// tying to buttons with eventListeners below

rock.addEventListener("click", playRound);
paper.addEventListener("click", playRound);
scissors.addEventListener("click", playRound);

//computer choice selection

function getComputerChoice() {
  let guess = Math.floor(Math.random() * 3) + 1;
  return guess;
}

//the game logic to determine the winner each round

function playRound() {
  const playerSelection = this.textContent.toLowerCase();
  const computerSelection = getComputerChoice();

  let roundWinner = "";

  if (computerSelection === 1) {
    if (playerSelection === "rock") {
      results.textContent = `Computer chose rock, you chose ${playerSelection}. It's a tie!`;
    } else if (playerSelection === "paper") {
      roundWinner = "Player";
      results.textContent = `Computer chose rock, you chose ${playerSelection}. ${roundWinner} wins!`;
    } else {
      roundWinner = "Computer";
      results.textContent = `Computer chose rock, you chose ${playerSelection}. ${roundWinner} wins!`;
    }
  }

  if (computerSelection === 2) {
    if (playerSelection === "rock") {
      roundWinner = "Computer";
      results.textContent = `Computer chose paper, you chose ${playerSelection}. ${roundWinner} wins!`;
    } else if (playerSelection === "paper") {
      results.textContent = `Computer chose paper, you chose ${playerSelection}. It's a tie!`;
    } else {
      roundWinner = "Player";
      results.textContent = `Computer chose paper, you chose ${playerSelection}. ${roundWinner} wins!`;
    }
  }

  if (computerSelection === 3) {
    if (playerSelection === "rock") {
      roundWinner = "Player";
      results.textContent = `Computer chose scissors, you chose ${playerSelection}. ${roundWinner} wins!`;
    } else if (playerSelection === "paper") {
      roundWinner = "Computer";
      results.textContent = `Computer chose scissors, you chose ${playerSelection}. ${roundWinner} wins!`;
    } else {
      results.textContent = `Computer chose scissors, you chose ${playerSelection}. It's a tie!`;
    }
  }

  if (roundWinner === "Player") {
    playerTotal++;
    document.querySelector(
      "#playerScore"
    ).textContent = `Player: ${playerTotal}`;
  } else if (roundWinner === "Computer") {
    computerTotal++;
    document.querySelector(
      "#computerScore"
    ).textContent = `Computer: ${computerTotal}`;
  }

  return roundWinner;
}

const determineWinner = document.addEventListener("click", (e) => {
  if (computerTotal === 5 || playerTotal === 5) {
    if (computerTotal === 5) {
      results.textContent = "COMPUTER WINS!";
    } else {
      results.textContent = "YOU WIN!";
    }
    rock.removeEventListener("click", playRound);
    paper.removeEventListener("click", playRound);
    scissors.removeEventListener("click", playRound);
  }
});
