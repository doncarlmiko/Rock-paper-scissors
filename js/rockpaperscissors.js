const rockHumanChoice = document.querySelector('#Rock');
const scissorsHumanChoice = document.querySelector('#Scissors');
const paperHumanChoice = document.querySelector('#Paper');

//Create an integer variable humanScore and put 0
//create an integer variable computerScore and put 0
let humanScore = 0;
let computerScore = 0;

//Count the number of times the button was clicked.
let countRockClick = 0;
let countScissorClick = 0;
let countPaperClick = 0;


//Button event handlers for getting the winner

//Getting the winner for Rock
rockHumanChoice.addEventListener('click', ()=>{
    countRockClick++;

    const computerWinner = getComputerChoice();
    const humanChoice = rockHumanChoice.id;

    const humanRockWinner = 
    computerWinner == scissorsHumanChoice.id ? rockHumanChoice.id : 
    computerWinner == paperHumanChoice.id ? 
    false : `It's a tie!`;

    playRound(humanRockWinner,computerWinner, humanChoice);
});

//Getting the winner for Scissors
scissorsHumanChoice.addEventListener('click',()=>{
    countScissorClick++;

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
    countPaperClick++;

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


//create a function playRound()
function playRound(humanWinner, computerWinner, humanChoice){
    const roundNumber = document.querySelector('#Round');
    const roundResult = document.querySelector('#result');

    const humanPick = document.querySelector('#human');
    const computerPick= document.querySelector('#computer');

    const humanFinalScore = document.querySelector('#humanScore');
    const computerFinalScore = document.querySelector('#computerScore');

    const resultWinner = document.querySelector('#Winner');

    let totalButtonCount = countRockClick + countScissorClick + countPaperClick;
    
    if(totalButtonCount <= 5){

        if(humanWinner === false){
            roundResult.textContent='You Lose this Round!';
            humanPick.textContent=humanChoice;
            computerPick.textContent=computerWinner;

            computerScore++;
            
            humanFinalScore.textContent=humanScore;
            computerFinalScore.textContent=computerScore;
            
            roundNumber.textContent=` ${totalButtonCount}`;
        }
        else if(computerWinner === humanChoice){
            roundResult.textContent= humanWinner;
            humanPick.textContent=humanChoice;
            computerPick.textContent=computerWinner;

            humanFinalScore.textContent=humanScore;
            computerFinalScore.textContent=computerScore;

            roundNumber.textContent=` ${totalButtonCount}`;
        }
    
        else if (humanWinner === humanChoice){
            roundResult.textContent='You Win this Round!';
            humanPick.textContent=humanChoice;
            computerPick.textContent=computerWinner;

            humanScore++;

            humanFinalScore.textContent=humanScore;
            computerFinalScore.textContent=computerScore;

            roundNumber.textContent=` ${totalButtonCount}`;
        }
        
    }

    if(roundNumber.textContent === ' 5'){
        rockHumanChoice.disabled = true;
        scissorsHumanChoice.disabled = true;
        paperHumanChoice.disabled = true;
    }
    
    if(humanScore > computerScore){
        resultWinner.textContent='Congratulations! You win the game!';
    }
    else if(humanScore < computerScore){
        resultWinner.textContent = 'You lose! Better luck next time.';
    }
    else if(humanScore === computerScore){
        resultWinner.textContent = `It's a tie game!`;
    }
     
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

