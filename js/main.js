
const COLORS = [
    'red',
    'orange',
    'yellow',
    'green',
    'blue',
    'purple'
]

function createAns() {
    answer = [] 
    for (let i = 0; i < 4; i++) { 
        answer.push(COLORS[Math.floor(Math.random()* COLORS.length)])
    }
    console.log(answer)
}

function getRandomAnswer(answer) {
    return [...answer].sort(() => Math.random () > 0.5 ? 1 : -1).slice(0,4)
}
console.log(getRandomAnswer(COLORS))

let currentGuess = 0

let currentColumn = 0

const checkAnsBtn = document.getElementById('checkAns')
console.log('this is checkAnsBtn', checkAnsBtn)

const pickColor = (e) => {

    console.log('this is the color')
    console.log(e.target.dataset.color)

    const guessDiv = document.getElementById(`g${currentGuess}c${currentColumn}`)
    console.log(guessDiv)

}
 function changeColor ( y ) {
        let x = document.getElementById("g0c0");
        x.style.backgroundColor = y

   

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
   