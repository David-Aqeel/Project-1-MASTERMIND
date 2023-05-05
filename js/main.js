
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





// save the answers as a variable

// const = randmAnswer = getRandomAnswer(COLORS)
// if userAns === computerGuessArray then popup winner message
// if userAns !== computerGuessArray then move to the next guess/row (current++)


let currentGuess = 0

let currentColumn = 0

let checkWinCount 

//const playAgainBtn = document.querySelector('button')
// console.log('this is playAgainBtn', playAgainBtn)

let userGuessArray = []


function pickColor(e) {

        const selectedColor = e.target.dataset.color;
        const guessDiv = document.getElementById(`g${currentGuess}c${currentColumn}`);
        guessDiv.style.backgroundColor = selectedColor;
        // increment currentColumn to move to the next guess
        currentColumn++;
        console.log(selectedColor);
        if (userGuessArray.length === 4) {
            userGuessArray = []
        }
        // else if (userGuessArray.length !== 4 && e.target.id === "g9c3") {
                
        // }
        userGuessArray.push(selectedColor);
       moveUpRow();
        return selectedColor;

}

//make switching rows its own function: move up row
function moveUpRow() {
    if (currentColumn === 4) {
        compareArrays()
        // reset currentColumn to 0 and increment currentGuess
        currentColumn = 0;
        currentGuess++;
        if (currentGuess >= 10 && userGuessArray[i] !== computerGuessArray[i]) {
            document.querySelector('#you-lose').style.display="flex"   
        }
        // TODO: handle switching to the next guess
    }    
    console.log(userGuessArray)
}

//create a function to render out the player array everytime it moves up a row 
//when a row is complete(user guess array has 4 elements), compare the user array with the computer guess array(nested if loop)(if guess array = 4 then do a for loop with an if statement)
//if userGuessArr matches computerGuessArr, then render winner message, else move to next row and clear out the user guess array. Can move the moveUpRow function into this statement for checking win condition.

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

                // make a check win count variable and if checkWinCount = 4 then you have a winner. render win message

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
// let a1 = document.querySelector('#g0c0').style.backgroundColor
// let a2 = document.querySelector('#g0c1')
// let a3 = document.querySelector('#g0c2')
// let a4 = document.querySelector('#g0c3')



//compareArray list:
// if the user array matches (if matches === 4) declare a winner
// if the two arrays don't match clear out the user guess array so we only get a maximum of  4 items in the array
//if the two arrays don't match move on to the next guess
//if all 10 guesses are wrong, declare lose msg
//need to track if user guesses are incorrect (state variable) and how many incorrect guesses.





//needs a counter
//make a clear array function so that after each check of 4 we will clear the array
//call clear array function in your else statement in the compare array function



// function 
// if(userGuessArr.length === 4) {
//     let isCorrect = userGuessArr.every((color, index) => {
//         return color === computerGuessArray[index];
//     });
// }


// if (isCorrect) {
//     console.log('Winner!')
// }
// else {
//     console.log
// }


// log all of the computers guesses into its own array. compare that array with the users guesses
// use the .every method:
// user guess. every =>. 

//console.log(userGuessArray)

/*function pickColor(e) {
    const selectedColor = e.target.dataset.color;
    const guessDiv = document.getElementById(`g${currentGuess}c${currentColumn}`);
    guessDiv.style.backgroundColor = selectedColor;
    // increment currentColumn to move to the next guess
    currentColumn++;
    console.log(selectedColor);
    return selectedColor;
    userGuessArr.push(selectedColor)
}*/


// currentGuess++ for changing the guess


  //for each guess, add the 4 picks to an empty array and then compare that with the answer,
  //if it is wrong then move on to the next guess, and if it is right then render the winner message. 



// add the guess to a list and compare with answer


function changeColor ( i ) {
      
        colorPicks.forEach(colorLi => {
        colorLi.addEventListener('click', pickColor)
        }) 
    
}
changeColor()



function init() {
   board =[
        [0, 0, 0, 0],
        [0, 0, 0, 0],
        [0, 0, 0, 0],
        [0, 0, 0, 0],
        [0, 0, 0, 0],
        [0, 0, 0, 0],
        [0, 0, 0, 0],
        [0, 0, 0, 0],
        [0, 0, 0, 0],
        [0, 0, 0, 0], 

    ];
    checkWinCount = 0;

    winner = null;
    render();
}



// function render() {
//     renderBoard()
//     renderControls()
// }


// function renderBoard() {
//     board.forEach((colArr, colIdx) => {
//     console.log(colArr, colIdx)
//         colArr.forEach((cellVal, rowIdx) => {
//         console.log(cellVal, rowIdx)
//         const cellId = `r${rowIdx}c${colIdx}`
//         const cellEl = document.getElementById(cellId)
//         cellEl.style.backgroundColor = COLORS[cellVal]
    
//         })
//     })
// }


// function renderControls()   {
//     playAgainBtn.style.visibility = winner ?'visible' : 'hidden'

//     boardEls.forEach((boardEl, colIdx) => {
//         const hideMarker = !board[colIdx].include(0) || winner 
//         boardEl.style.visibility = hideBoard ? 'hidden' : 'visible'
//     })
// }
//  function playerGuess(event)    {
//         const colIdx = boardEls.indexOf(event.target)
//  }
