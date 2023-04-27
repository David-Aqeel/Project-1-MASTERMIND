
//PSEUDOCODE:
/*----- constants -----*/
//Mastermind logo
//Color choices
const COLORS = [
    'red',
    'orange',
    'yellow',
    'green',
    'blue',
    'purple'
]

//Check Answer Button

/*----- state variables -----*/
//guess slots

let answer = []

let currentGuess = 0

let currentColumn = 0

let board // array of 4 guesses


let winner // null || 1 || -1

/*----- cached elements  -----*/
//color choices

const checkAnsBtn = document.getElementById('checkAns')
console.log('this is checkAnsBtn', checkAnsBtn)

//const playAgainBtn = document.getElementById('playAgain')

//const playAgainBtn = document.querySelector('button')
//console.log('this is playAgainBtn', playAgainBtn)

//const boardEls = [...document.querySelectorAll('#board>div')]
//console.log('this is boardEls', boardEls)

const colorPicks = [...document.querySelectorAll('li')]

const pickColor = (e) => {

    console.log('this is the color')
    console.log(e.target.dataset.color)

    const guessDiv = document.getElementById(`g${currentGuess}c${currentColumn}`)
    console.log(guessDiv)

    //next steps
    // now that we can get our target guess div we need to alter it so that it now has the corresponding color 

     function changeColor() {
        let x = document.getElementById("g0c0");
        x.style.backgroundColor = "#f40"
     }
    
    // if I have a array to keep track of the current player guess I want to mutate it here

    // then I want to mutate the current column (global) by increasing by 1
    currentColumn = + 1
    // if the new current column is 4 i.e row is filled, set it to 0 and increase guess by 1
    currentGuess = + 1
    // run guessCheckLogic (compare guess array to answer array)


    // give user feedback





    //<div id="g0c0"></div>
    //<div id="g0c1"></div>
    //<div id="g0c2"></div>
    //<div id="g0c3"></div>

    //I want to have the colors appear in the empty guess slots starting from the bottom left of the array
    //I want the colorPicks to populate one row at a time only, from left to right
    //I want the user to be able to change their picks by clicking on the populated slot
            //When a user picks a color, the first pick will populate the left most column of the lowest unfilled row
           /* pickColor.addEventListener('click', function fillSlot() {
                    const fillSlot = e.target.dataset.color
            });
            console.log (fillSlot)*/
            // the second pick will populate the spot directly to the right of the first column 
            //the third pick will populate the spot directly to the right of the second column 
            //the fourth pick will populate the spot directly to the right of the third column 
            //when all 4 spots in a row are filled the user cannot fill any more spots unless:
                //the user clicks on an already picked color to unselect it
                //the user clicks the check answer button to verify their guess with (getRandomAnswer(COLORS))
            //the user should only be able to populate one row at a time before clicking checkAnsBtn
            //if the answer is correct, the user will get a "winner" message
            //if the answer is wrong, the user will move on to their next guess (next row)
            //if the user guesses 10 times and gets the answer wrong, the game will end, and the play again button will pop up.


    
}
 
colorPicks.forEach(colorLi => {
    colorLi.addEventListener('click', pickColor)
}) 

/*console.log('this is colorPicks', colorPicks)
colorPicks.forEach(color => {
    console.log()
})*/

/*----- event listeners -----*/
//button clicks
//document.getElementById('red').addEventListener('click', playerGuess)

//correct answer


/*----- functions -----*/
//pick colors
//check answers
//compare guess to answer

function createAns() {
    //i want this function to pick 4 random options out of the 6 available options and store that as the answer
    answer = [] // make sure answer array is empty at the beginning of game
    for (let i = 0; i < 4; i++) { //looping 4 times 
        answer.push(COLORS[Math.floor(Math.random()* COLORS.length)]) // picking one random color option and pushing it to 'answer'
    }
    console.log(answer)
}

function getRandomAnswer(answer) {
    return [...answer].sort(() => Math.random () > 0.5 ? 1 : -1).slice(0,4)//sorting through the color options and removing already selected colors and 
}
console.log(getRandomAnswer(COLORS)) //generating random answer sequence

// store answer const = getRandomAnswer


// popup the answer when guessed correctly



function init() {
   /* board =[
        [0, 0, 0, 0], // guess 1
        [0, 0, 0, 0], // guess 2
        [0, 0, 0, 0], // guess 3
        [0, 0, 0, 0], // guess 4
        [0, 0, 0, 0], // guess 5
        [0, 0, 0, 0], // guess 6
        [0, 0, 0, 0], // guess 7
        [0, 0, 0, 0], // guess 8
        [0, 0, 0, 0], // guess 9
        [0, 0, 0, 0], // guess 10

    ];*/
    turn = 1;
    winner = null;
    render();
}

function render() {
    //render board
    renderBoard()
    //render buttons
    renderControls()
    //render message

}

function renderBoard() {
    board.forEach((colArr, colIdx) => {
    console.log(colArr, colIdx)
        guessArr.forEach((cellVal, rowIdx) => {
        console.log(cellVal, rowIdx)
        const cellId = `c${colIdx}r${rowIdx}`
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
    //Start by making an empty guess array.
    //let guess_1 = [];
    //cache dom elements

    //generate an answer to compare with the user guesses.
    //player can start guessing via dom interface.
    //add guess to the guess array.
    //if the guess is wrong and there are fewer than 10 guesses continue to the next guess, otherwise end game and show score/reset game button.
    //give feedback by manipulating dom.


    // render code
    // on button click 
    //first check the board (js)
    // inside the board, see if the first subarray has any open positions
    // if the first array includes 0s, find the first 0 and replace it
    // replace it with the color picked
    // then update the background color for the guess element

    //checkans

    // on submit go through the board array, find the first array that has 0 0s.
    // once found, loop through every getRandomAnswer array and compare each index of the guess with the computer generated ans.