const rockHumanChoice = document.querySelector('#Meteor');// Rock

const scissorsHumanChoice = document.querySelector('#Laser-beam');//Laser beam

const paperHumanChoice = document.querySelector('#Force-Field');//Paper

//The images of the weapons
const humanWeapon = document.querySelector('#humanWeapon');
const computerWeapon = document.querySelector('#computerWeapon');

//Counts the total score of each players
let humanScore = 0;
let computerScore = 0;

//Count the number of times each button was clicked.
let countRockClick = 0;
let countScissorClick = 0;
let countPaperClick = 0;


//Button event handlers for getting the winner

//Getting the winner for Rock (Meteor)
rockHumanChoice.addEventListener('click', ()=>{

    countRockClick++;

    humanWeapon.src='../img/Weapons/Meteor.png';
    const computerWinner = getComputerChoice();
    const humanChoice = rockHumanChoice.id;

    const humanRockWinner = 
    computerWinner == scissorsHumanChoice.id ? rockHumanChoice.id : 
    computerWinner == paperHumanChoice.id ? 
    false : `It's a tie!`;

    playRound(humanRockWinner,computerWinner, humanChoice);

});

//Getting the winner for Scissors(Laser beam)
scissorsHumanChoice.addEventListener('click',()=>{

    countScissorClick++;

    humanWeapon.src='../img/Weapons/Laser beam.png';

    const computerWinner = getComputerChoice();
    const humanChoice = scissorsHumanChoice.id;

    const humanPaperWinner = 
    computerWinner == paperHumanChoice.id ? scissorsHumanChoice.id : 
    computerWinner == rockHumanChoice.id ? false : 
    `It's a tie!`;

    playRound(humanPaperWinner,computerWinner, humanChoice);
});

//Getting the winner for Paper(force Field)
paperHumanChoice.addEventListener('click', ()=>{

    countPaperClick++;

    humanWeapon.src='../img/Weapons/Force field.png';

    const computerWinner = getComputerChoice();
    const humanChoice = paperHumanChoice.id;

    const humanScissorWinner = 
    computerWinner == rockHumanChoice.id ? paperHumanChoice.id: 
    computerWinner == scissorsHumanChoice.id ? false : 
    `It's a tie!`;

    playRound(humanScissorWinner,computerWinner, humanChoice);
});


    //Create a function getComputerChoice
    function getComputerChoice(){
        const Meteor = 'Meteor';
        const forceField = 'Force-Field';
        const laserBeam = 'Laser-beam';

        //put Math.floor(Math.random() * 3) in RandomNumber
        const RandomNumber = Math.floor(Math.random() * 3);

        //If RandomNumber is equal to 0 return Rock
        if (RandomNumber === 0){
            //set the image of each choices.
            computerWeapon.src='../img/Weapons/Meteor.png';
            
            return Meteor;
        }

        //If RandomNumber is equal to 1 return Paper
        else if (RandomNumber === 1){
            computerWeapon.src='../img/Weapons/Force field.png';
            return forceField;
        }

        //If RandomNumber is equal to 2 return Scissors
        else if (RandomNumber === 2){
            computerWeapon.src='../img/Weapons/Laser beam.png';
            return laserBeam;
        }
    }


//create a function playRound()
function playRound(humanWinner, computerWinner, humanChoice){
   // const roundNumber = document.querySelector('#Round');
    const roundResult = document.querySelector('#result');

    //The selected option of the human player and the computer
    const humanPick = document.querySelector('#human');
    const computerPick= document.querySelector('#computer');

    const humanFinalScore = document.querySelector('#humanScore');
    const computerFinalScore = document.querySelector('#computerScore');

    let resultWinner;

    //Add the total number of clicks of all the buttons: Rock, paper, scissors.
    let totalButtonCount = countRockClick + countScissorClick + countPaperClick;
    
    //play each round of the game
        if(humanWinner === false){
            roundResult.textContent=' You Lose this Round!';
            humanPick.textContent=humanChoice;
            computerPick.textContent=computerWinner;

            computerScore++;
            
            humanFinalScore.textContent=humanScore;
            computerFinalScore.textContent=computerScore;
            
            //roundNumber.textContent=` ${totalButtonCount}`;

            getFinalWinner(humanScore,computerScore,resultWinner);
        }
        else if(computerWinner === humanChoice){
            roundResult.textContent= humanWinner;
            humanPick.textContent=humanChoice;
            computerPick.textContent=computerWinner;

            humanFinalScore.textContent=humanScore;
            computerFinalScore.textContent=computerScore;

            //roundNumber.textContent=` ${totalButtonCount}`;

            getFinalWinner(humanScore,computerScore,resultWinner);
        }
    
        else if (humanWinner === humanChoice){
            roundResult.textContent=' You Win this Round!';
            humanPick.textContent=humanChoice;
            computerPick.textContent=computerWinner;

            humanScore++;

            humanFinalScore.textContent=humanScore;
            computerFinalScore.textContent=computerScore;

            //roundNumber.textContent=` ${totalButtonCount}`;

            getFinalWinner(humanScore,computerScore,resultWinner);
        }

    //disable the three buttons when it is already five rounds
    if(humanScore ===5 || computerScore ===5){
        rockHumanChoice.disabled = true;
        scissorsHumanChoice.disabled = true;
        paperHumanChoice.disabled = true;
    }
}

//get the Final winner
function getFinalWinner(humanScore,computerScore,resultWinner){

    //Display the result of the Winner
    if((humanScore === 5 || computerScore === 5) && humanScore > computerScore){
        resultWinner=alert('Congratulations! You win the game!');
    }
    else if((humanScore === 5 || computerScore === 5) && humanScore < computerScore){
        resultWinner= alert('You lose! Better luck next time.');
    }
    else if((humanScore === 5 || computerScore === 5) && humanScore === computerScore){
        resultWinner= alert(`It's a tie game!`);
    }
     
}


