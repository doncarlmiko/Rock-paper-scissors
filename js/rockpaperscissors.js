console.log('Hello world');

function getComputerChoice(){
    const Rock = 'Rock';
    const Paper = 'Paper';
    const Scissors = 'Scissors';
    const RandomNumber = Math.floor(Math.random() * 3);

    if (RandomNumber === 0){
        return Rock;
    }
    else if (RandomNumber === 1){
        return Paper;
    }
    else if (RandomNumber === 2){
        return Scissors;
    }
}

console.log(getComputerChoice());