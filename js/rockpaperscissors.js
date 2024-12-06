
    //Create a function getComputerChoice
    function getComputerChoice(){

        //create a string variable Rock for function getComputerChoice
        //put "Rock" in Rock
        const Rock = 'Rock';
        
        //Create a string variable Paper for function getComputerChoice
        //put "Paper" in Paper
        const Paper = 'Paper';

        //create a string variable Scissors for function getComputerChoice
        //put "Scissors" in Scissors
        const Scissors = 'Scissors';
        //put Math.floor(Math.random() * 3) in RandomNumber

        //create an integer variable RandomNumber for function getComputerChoice
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
    function getHumanChoice(){

        let whileTrue = true;

        while(whileTrue = true){

            //create a variable string userInput for function getHumanChoice()
            //put prompt("Pick one - Rock, Paper, Scissors: ", "") to userInput
            const userInput = prompt("Pick one - Rock, Paper, Scissors: ", "");

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
                return;
            }

            //if userInput is equal to Rock, set whileTrue = false and return Rock
            else if (userInput.toLowerCase() === Rock.toLowerCase()){
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
    }

//create a variable humanSelection
//set humanSelection to result of calling getHumanChoice()
const humanSelection = getHumanChoice();

//print humanSelection
console.log(`Human choose: ${humanSelection}!`);

//create a variable computerSelection 
//set computerSelection to result of calling getComputerChoice()
const computerSelection = getComputerChoice();

// print computerSelection
console.log(`Computer choose: ${computerSelection}!`);


//Create an integer variable humanScore and put 0
//create an integer variable computerScore and put 0
let humanScore = 0;
let computerScore = 0;

//create a function playRound()
//define two parameters for playRound() : humanChoice, computerChoice
function playRound(humanChoice, computerChoice){
    //create string variable getHumanChoice for playRound()
    //set getHumanChoice = humanChoice
    const getHumanChoice = humanChoice.toLowerCase();

    //create string variable getComputerChoice for playRound()
    //set getComputerChoice = computerChoice
    const getComputerChoice = computerChoice.toLowerCase();

    //create an array variable playerChoices["Rock","Paper","Scissors"] for playRound()
    const playerChoices = ["Rock","Paper","Scissors"];

    // If getHumanChoice  = playerChoices[0] and getComputerChoice = playerChoices[1], increment computerScore++ , 
    //print `Current Score - Human: ${humanScore}, Computer: ${computerScore}` and return "You lose! Paper beats Rock"
    if (getHumanChoice == playerChoices[0].toLowerCase() && getComputerChoice == playerChoices[1].toLowerCase()){
        computerScore++;
        console.log(`Current Score - Human: ${humanScore}, Computer: ${computerScore}`);

        return console.log(`You lose! Paper beats Rock`);
    }

    /*If getHumanChoice  = playerChoices[0] and getComputerChoice = playerChoices[2], increment humanScore++ , 

    print `Current Score - Human: ${humanScore}, Computer: ${computerScore}` and return "You win! Rock beats Scissors"*/
    else if (getHumanChoice == playerChoices[0].toLowerCase() && getComputerChoice == playerChoices[2].toLowerCase()){
        humanScore++;
        console.log(`Current Score - Human: ${humanScore}, Computer: ${computerScore}`);

        return console.log("You win! Rock beats Scissors");
    }


    /*If getHumanChoice  = playerChoices[1] and getComputerChoice = playerChoices[0], increment humanScore++ , 

    print `Current Score - Human: ${humanScore}, Computer: ${computerScore}` and return "You win! Paper beats Rock." */
    else if (getHumanChoice == playerChoices[1].toLowerCase() && getComputerChoice == playerChoices[0].toLowerCase()){
        humanScore++;
        console.log(`Current Score - Human: ${humanScore}, Computer: ${computerScore}`);

        return console.log("You win! Paper beats Rock.");
    }

    /*If getHumanChoice  = playerChoices[1] and getComputerChoice = playerChoices[2], increment computerScore++ , 
  
    print `Current Score - Human: ${humanScore}, Computer: ${computerScore}` and return "You lose! Scissors beats Paper." */
    else if (getHumanChoice == playerChoices[1].toLowerCase() && getComputerChoice == playerChoices[2].toLowerCase()){
        computerScore++;
        console.log(`Current Score - Human: ${humanScore}, Computer: ${computerScore}`);

        return console.log("You lose! Scissors beats Paper.");
    }


    /**If getHumanChoice  = playerChoices[2] and getComputerChoice = playerChoices[0], increment computerScore++, 
  
    print `Current Score - Human: ${humanScore}, Computer: ${computerScore}` and return "You lose! Rock beats Scissors." */
    else if (getHumanChoice == playerChoices[2].toLowerCase() && getComputerChoice == playerChoices[0].toLowerCase()){
        computerScore++;
        console.log(`Current Score - Human: ${humanScore}, Computer: ${computerScore}`);

        return console.log("You lose! Rock beats Scissors.");
    }


    /*If getHumanChoice  = playerChoices[2] and getComputerChoice = playerChoices[1],  increment humanScore++, 
  
    print `Current Score - Human: ${humanScore}, Computer: ${computerScore}` and return "You win! Scissors beats Paper."*/
    else if (getHumanChoice == playerChoices[2].toLowerCase() && getComputerChoice == playerChoices[1].toLowerCase()){
        humanScore++;
        console.log(`Current Score - Human: ${humanScore}, Computer: ${computerScore}`);

        return console.log("You win! Scissors beats Paper.");
    }


    /*else 
    print `Current Score - Human: ${humanScore}, Computer: ${computerScore}` and return "It's a tie!" */
    else{
        console.log(`Current Score - Human: ${humanScore}, Computer: ${computerScore}`);
        return console.log("It's a tie!");
    }
}

//call playRound(humanSelection, computerSelection)
playRound(humanSelection, computerSelection);

