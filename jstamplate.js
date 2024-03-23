function getComputerChoice(){
    var  choices =["Rock", "Paper" , "Scissors"];
    var  randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];

}

function playRound(playerSelection, computerSelection) {
     computerSelection = computerSelection.toLowerCase();
     playerSelection = playerSelection.toLowerCase();
     if (playerSelection === computerSelection){
        return("Its a tie!");
     }
     else if(
        (playerSelection === "rock" && computerSelection === "scissors") ||
        (playerSelection === "Scissors" && computerSelection === "paper") ||
        (playerSelection === "paper" && computerSelection === "rock")
     ){
        return ` You win! ${playerSelection} beats ${computerSelection}`;
     }
     else {
        return `You lose!${computerSelection} beats ${playerSelection}`;
     }    
  }


function playGame() {
   let playerScore = 0;
   let computerScore = 0;
   for (let i = 0; i < 5; i++ ){
      const playerSelection = prompt("Enter your choice (Rock, Paper, or Scissors):");
      const computerSelection = getComputerChoice();
      const result = playRound(playerSelection,computerSelection);
      console.log(result);

   

   if (result.includes("win")) {
      playerScore++;
   }
   else if (result.includes("lose")) {
      computerScore++;
  }
   }


  if( playerScore > computerScore){
   console.log("Congratulations! You win the game");
  }

  else if( playerScore < computerScore){
   console.log("Sorry! You lose the game");
  }

  else {
   console.log("Oh! Its a Tie");
  }

}















playGame();