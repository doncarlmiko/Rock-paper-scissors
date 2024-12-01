
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

//print getComputerChoice
console.log(getComputerChoice());