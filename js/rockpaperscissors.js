const rockHumanChoice = document.querySelector('#Rock');
const scissorsHumanChoice = document.querySelector('#Scissors');
const paperHumanChoice = document.querySelector('#Paper');

//Button event handlers for getting the winner

//Getting the winner for Rock
rockHumanChoice.addEventListener('click', ()=>{
    const computerWinner = getComputerChoice();
    const humanChoice = rockHumanChoice.textContent;

    const humanRockWinner = 
    computerWinner == scissorsHumanChoice.textContent ? rockHumanChoice.textContent : 
    computerWinner == paperHumanChoice.textContent ? 
    false : `It's a tie!`;

    playRound(humanRockWinner,computerWinner, humanChoice);
});

//Getting the winner for Scissors
scissorsHumanChoice.addEventListener('click',()=>{
    const computerWinner = getComputerChoice();
    const humanChoice = scissorsHumanChoice.textContent;

    const humanPaperWinner = 
    computerWinner == paperHumanChoice.textContent ? scissorsHumanChoice.textContent : 
    computerWinner == rockHumanChoice.textContent ? false : 
    `It's a tie!`;

    playRound(humanPaperWinner,computerWinner, humanChoice);
});

//Getting the winner for Paper
paperHumanChoice.addEventListener('click', ()=>{
    const computerWinner = getComputerChoice();
    const humanChoice = paperHumanChoice.textContent;

    const humanScissorWinner = 
    computerWinner == rockHumanChoice.textContent ? paperHumanChoice.textContent : 
    computerWinner == scissorsHumanChoice.textContent ? false : 
    `It's a tie!`;

    playRound(humanScissorWinner,computerWinner, humanChoice);
});


    //Create a function getComputerChoice
    function getComputerChoice(){
        const Rock = 'Rock';
        const Paper = 'Paper';
        const Scissors = 'Scissors';

        //put Math.floor(Math.random() * 3) in RandomNumber
        const RandomNumber = Math.floor(Math.random() * 3);

        //If RandomNumber is equal to 0 return Rock
        if (RandomNumber === 0){
            return Rock;
        }

        //If RandomNumber is equal to 1 return Paper
        else if (RandomNumber === 1){
            return Paper;
        }

        //If RandomNumber is equal to 2 return Scissors
        else if (RandomNumber === 2){
            return Scissors;
        }
    }

    //Create a function getHumanChoice()
    /*function getHumanChoice(){

        //let whileTrue = true;

        while(whileTrue = true){

            //create a variable string userInput for function getHumanChoice()
            //put prompt("Pick one - Rock, Paper, Scissors: ", "") to userInput
            const userInput = prompt("Pick one - Rock, Paper, Scissors: ");

            //create a variable string Rock for function getHumanChoice()
            //put "Rock" in Rock
            const Rock = 'Rock';

            //create a variable string Paper for function getHumanChoice()
            //put "Paper" in Paper
            const Paper = 'Paper';

            //create a variable string Scissors for function getHumanChoice()
            //put "Scissors" in Scissors
            const Scissors = 'Scissors';
            
            //Create a boolean variable whileTrue and put true

            //If userInput is equal to null set whileTrue = false and return alert('Cancelled!')
            if(userInput === null){
                alert('Cancelled!');
                return null;
            }

            //if userInput is equal to Rock, set whileTrue = false and return Rock
             if (userInput.toLowerCase() === Rock.toLowerCase()){
                whileTrue = false;
                return Rock;
            }

            //If userInput is equal to Paper, set whileTrue = false and return Paper
            else if(userInput.toLowerCase() === Paper.toLowerCase()){
                whileTrue = false;
                return Paper;
            }

            // If userInput is equal to Scissors, set whileTrue = false and return Scissors
            else if(userInput.toLowerCase() === Scissors.toLowerCase()){
                whileTrue = false;
                return Scissors;
            }

            //If whileTrue is equal to true, alert('Please choose Rock, Paper or Scissors only!')
            else if (whileTrue = true){
                 alert('Please choose, Rock, Paper or Scissors!');
            }
        }


    }*/

//Create an integer variable humanScore and put 0
//create an integer variable computerScore and put 0
let humanScore = 0;
let computerScore = 0;

//create a function playRound()
//define two parameters for playRound() : humanChoice, computerChoice
function playRound(humanWinner, computerWinner, humanChoice){

    alert(`${humanWinner} ${computerWinner} ${humanChoice}`);
    
}

//call playRound(humanSelection, computerSelection)
//playRound(humanSelection, computerSelection);

function playGame(){
    let loopRound;
    /*for(loopRound = 1; loopRound <= 5; loopRound++){
        // Get new choices for each round

        //create a variable humanSelection
        //set humanSelection to result of calling getHumanChoice()
        //const humanSelection = getHumanChoice();
        const humanSelection = getHumanChoice();
        if (humanSelection === null) {
            // Exit the game if the user cancels
            console.log("Game cancelled by the user.");
            return;
        }

        //create a variable computerSelection 
        //set computerSelection to result of calling getComputerChoice()
        //const computerSelection = getComputerChoice();
        const computerSelection = getComputerChoice();

        //console.log(`Human chose: ${humanSelection}`);
        //console.log(`Computer chose: ${computerSelection}`);

        // Play a round and update scores
        playRound(humanSelection, computerSelection);
    }*/

    console.log(`\nFinal Score: Human: ${humanScore}, Computer: ${computerScore}`);
    if (humanScore > computerScore) {
        console.log("Congratulations! You win the game!");
    } else if (computerScore > humanScore) {
        console.log("You lose! Better luck next time.");
    } else {
        console.log("It's a tie game!");
    }
}

//playGame();

