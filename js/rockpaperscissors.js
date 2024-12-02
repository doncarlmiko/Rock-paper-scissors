
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

        //if userInput is equal to Rock, return Rock
        if (userInput.toLowerCase().includes(Rock.toLowerCase())){
            return Rock;
        }

        //If userInput is equal to Paper, return Paper
        else if(userInput.toLowerCase().includes(Paper.toLowerCase())){
            return Paper;
        }

        //If userInput is equal to Scissors, return Scissors
        else if(userInput.toLowerCase().includes(Scissors.toLowerCase())){
            return Scissors;
        }
    }

//create a variable humanSelection
//set humanSelection to result of calling getHumanChoice()
const humanSelection = getHumanChoice();

//print humanSelection
console.log(humanSelection);

//create a variable computerSelection 
//set computerSelection to result of calling getComputerChoice()
const computerSelection = getComputerChoice();

// print computerSelection
console.log(computerSelection);

