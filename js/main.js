
const COLORS = [
    'red',
    'orange',
    'yellow',
    'green',
    'blue',
    'purple',
]

const colorPicks = [...document.querySelectorAll('li')]

let computerGuessArray = []

function getRandomAnswer(answer) {
    return [...answer].sort(() => Math.random () > 0.5 ? 1 : -1).slice(0,4)
}

computerGuessArray = getRandomAnswer(COLORS)

console.log(computerGuessArray)





// save the answers as a variable

// const = randmAnswer = getRandomAnswer(COLORS)
// if userAns === computerGuessArray then popup winner message
// if userAns !== computerGuessArray then move to the next guess/row (current++)


let currentGuess = 0

let currentColumn = 0

const checkAnsBtn = document.getElementById('checkAns')

let userGuessArr = []

for(x=0; x<=3; x++) {

    function pickColor(e) {

        const selectedColor = e.target.dataset.color;
        const guessDiv = document.getElementById(`g${currentGuess}c${currentColumn}`);
        guessDiv.style.backgroundColor = selectedColor;
        // increment currentColumn to move to the next guess
        currentColumn++;
        console.log(selectedColor);
        userGuessArr.push(selectedColor)
        return selectedColor;
        
    }
    if(userGuessArr.length === 4) {
        break
    }
}
// log all of the computers guesses into its own array. compare that array with the users guesses
// use the .every method:
// user guess. every =>. 

console.log(userGuessArr)

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


function changeColor ( y ) {
      
        colorPicks.forEach(colorLi => {
        colorLi.addEventListener('click', pickColor)
        }) 
    
}




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
    turn = 1;
    winner = null;
    render();
}



function render() {
    renderBoard()
    renderControls()
}


function renderBoard() {
    board.forEach((colArr, colIdx) => {
    console.log(colArr, colIdx)
        colArr.forEach((cellVal, rowIdx) => {
        console.log(cellVal, rowIdx)
        const cellId = `r${rowIdx}c${colIdx}`
        const cellEl = document.getElementById(cellId)
        cellEl.style.backgroundColor = COLORS[cellVal]
    
        })
    })
}


function renderControls()   {
    playAgainBtn.style.visibility = winner ?'visible' : 'hidden'

    boardEls.forEach((boardEl, colIdx) => {
        const hideMarker = !board[colIdx].include(0) || winner 
        boardEl.style.visibility = hideBoard ? 'hidden' : 'visible'
    })
}
 function playerGuess(event)    {
        const colIdx = boardEls.indexOf(event.target)
 }
