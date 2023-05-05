
const COLORS = [
    'red',
    'orange',
    'yellow',
    'green',
    'blue',
    'purple',
]

const colorPicks = document.querySelectorAll('li')

let computerGuessArray = []

function getRandomAnswer(answer) {
    return [...answer].sort(() => Math.random () > 0.5 ? 1 : -1).slice(0,4)
}
computerGuessArray = getRandomAnswer(COLORS)

console.log('This is answer', computerGuessArray)


let currentGuess = 0

let currentColumn = 0

let checkWinCount 

let userGuessArray = []


function pickColor(e) {

    const selectedColor = e.target.dataset.color;
    const guessDiv = document.getElementById(`g${currentGuess}c${currentColumn}`);
    guessDiv.style.backgroundColor = selectedColor;
    currentColumn++;
    console.log(selectedColor);
    if (userGuessArray.length === 4) {
        userGuessArray = []
    }
  
    userGuessArray.push(selectedColor);
    moveUpRow();
    return selectedColor;

}

function moveUpRow() {
    if (currentColumn === 4) {
        compareArrays()
        currentColumn = 0;
        currentGuess++;
        if (currentGuess >= 10 && userGuessArray[i] !== computerGuessArray[i]) {
            document.querySelector('#you-lose').style.display="flex"   
        }
    }    
    console.log(userGuessArray)
}


function compareArrays() {
    let matches = 0
    const tryAgain = document.getElementById('try-again');

    if (userGuessArray.length === 4 ) {
        for (i = 0; i < computerGuessArray.length; i ++) {
            if (userGuessArray[i] === computerGuessArray[i]) {
                checkWinCount++
                console.log('this is user guess', userGuessArray[i])
                console.log('this is computer answer', computerGuessArray[i])
                console.log('We have a match')
                matches++
                tryAgain.innerHTML = "Amazing.";

            } else {
                console.log("We don't have a match")
                checkWinCount=0
                tryAgain.innerHTML = "Sorry, your guess didn't match. Please try again.";
                setTimeout(function() {
                    tryAgain.innerHTML = "";
                  }, 1000);
                return;
            }

        }
    }
    console.log('this is matches', matches)// win/lose statement
    if (matches === 4) {
        document.querySelector('#you-won').style.display="flex"
    }
    else {
        matches = 0
        userGuessArray = []
    }
}




function changeColor ( i ) {
      
        colorPicks.forEach(colorLi => {
        colorLi.addEventListener('click', pickColor)
        }) 
    
}
changeColor()



