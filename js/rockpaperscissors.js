// Rock
const rockHumanChoice = document.querySelector('#Meteor');

//Laser beam
const scissorsHumanChoice = document.querySelector('#Laser-beam');

//Paper
const paperHumanChoice = document.querySelector('#Force-Field');

//The images of the weapons
const humanWeapon = document.querySelector('#humanweapon');
const computerWeapon = document.querySelector('#computerweapon');
const rotateHumanWeapon = document.querySelector('#humanWeaponFigure');
const rotateComputerWeapon = document.querySelector('#computerWeaponFigure');

//change the class for weapon image
const changeWeaponImg = document.querySelectorAll('button');

const showWeaponName = document.querySelectorAll('.fig1');

//Counts the total score of each players
let humanScore = 0;
let computerScore = 0;

changeWeaponImg.forEach((btn)=>{
    btn.addEventListener('click',()=>{
        humanWeapon.className='humanWeapon';
        computerWeapon.className='alienWeapon';
    });
});

//Button for Rock choice (Meteor)
rockHumanChoice.addEventListener('click', ()=>{
    humanWeapon.src='../img/Weapons/Meteor.png';
    
    //rotate the image weapon
    humanWeapon.classList.add('flipImg');

    const humanChoice = rockHumanChoice.id;

    playRound(humanChoice);
});

//Button for Scissors choice(Laser beam)
scissorsHumanChoice.addEventListener('click',()=>{
    humanWeapon.src='../img/Weapons/Laser beam.png';

    const humanChoice = scissorsHumanChoice.id;
    
    playRound(humanChoice);
});

//Button for Paper choice (force Field)
paperHumanChoice.addEventListener('click', ()=>{
    humanWeapon.src='../img/Weapons/Force field.png';

    const humanChoice = paperHumanChoice.id;

    playRound(humanChoice);
});
    //Create a function getComputerChoice
    function getComputerChoice(){
        const Meteor = 'Meteor';
        const forceField = 'Force-Field';
        const laserBeam = 'Laser-beam';

        //Generates a RandomNumber
        const RandomNumber = Math.floor(Math.random() * 3);

        
        //set the image of each choices.
        if (RandomNumber === 0){
            computerWeapon.src='../img/Weapons/Meteor.png';
            return Meteor;
        }
        else if (RandomNumber === 1){
            computerWeapon.src='../img/Weapons/Force field.png';
            return forceField;
        }
        else if (RandomNumber === 2){
            computerWeapon.src='../img/Weapons/Laser beam.png';
            computerWeapon.classList.add('flipImg');
            return laserBeam;
        }
    }

function playRound(humanChoice){
   // const roundNumber = document.querySelector('#Round');
    const roundResult = document.querySelector('#result');

    //The selected option of the human player and the computer
    const humanPick = document.querySelector('#human');
    const computerPick= document.querySelector('#computer');

    //show weapon name
    showWeaponName.forEach((showWeapon)=>{
        showWeapon.style.display='block';
    });

    const humanFinalScore = document.querySelector('#humanScore');
    const computerFinalScore = document.querySelector('#computerScore');

    let resultWinner;

    //Pair of weapons where they defeat the other one.
    const winningMoves ={
        'Meteor':'Laser-beam',
        'Force-Field':'Meteor',
        'Laser-beam':'Force-Field'
    }

    const computerWinner = getComputerChoice();

    const humanWinner = 
    computerWinner == winningMoves[humanChoice] ? humanChoice : 
    computerWinner == humanChoice ? `It's a tie!`:
    false ;

    //play each round of the game
        if(humanWinner === false){
            roundResult.textContent=' You Lose this Round!';
            humanPick.textContent=humanChoice;
            computerPick.textContent=computerWinner;

            computerScore++;
            
            humanFinalScore.textContent=humanScore;
            computerFinalScore.textContent=computerScore;

            getFinalWinner(humanScore,computerScore,resultWinner);
        }
        else if(computerWinner === humanChoice){
            roundResult.textContent= humanWinner;
            humanPick.textContent=humanChoice;
            computerPick.textContent=computerWinner;

            humanFinalScore.textContent=humanScore;
            computerFinalScore.textContent=computerScore;

            getFinalWinner(humanScore,computerScore,resultWinner);
        }
    
        else if (humanWinner === humanChoice){
            roundResult.textContent=' You Win this Round!';
           
            humanPick.textContent=humanChoice;
            computerPick.textContent=computerWinner;

            humanScore++;

            humanFinalScore.textContent=humanScore;
            computerFinalScore.textContent=computerScore;

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


