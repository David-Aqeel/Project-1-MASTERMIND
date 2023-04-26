# Project-1-MASTERMIND
Wireframes:

![Homepage Wireframe](https://github.com/David-Aqeel/Project-1-MASTERMIND/blob/response/imgs/Wireframe1.jpg)
![Gameplay Wireframe](https://github.com/David-Aqeel/Project-1-MASTERMIND/blob/response/imgs/Wireframe2.jpg)



PSEUDOCODE:

    //Start by making an empty guess array.
    //cache dom elements
    //generate an answer to compare with the user guesses.
    //player can start guessing via dom interface.
    //add guess to the guess array. (START WITH 1 GUESS AND WHEN THE CODE IS FUNCTIONAL JUST ADD GUESSES (li) TO AN INCREASING LIST (ol)).
    //if the guess is wrong and there are fewer than 10 guesses continue to the next guess, otherwise end game and show score/reset game button.
    //give feedback by manipulating dom.

--- 

/*----- constants -----*/
//Mastermind logo
//Color choices- Hold the values of the color choices 
//Check Answer Button

/*----- state variables -----*/
//guess slots - 10 arrays with 4 nested arrays
//correct guess vs incorrect guess

/*----- cached elements  -----*/
//color choices
//play again button
//game board
//check answer button
//empty color slots (black)


/*----- event listeners -----*/
//button clicks
//correct answer


///Upon game loading the page shoud:
/// -Initialize state variables:
        >Setup empty guess slots(4 nested arrays)/render board
        >Show color options on the side
        >Have an answer generated (that is hidden) to match the guesses with

---
//Mastermind Game setup

-game board:
    ```js
    let board
    ```
    

//Need a home page with the mastermind name top centered in big letter and three menu options: Game Rules, High Score List, and Start Game

//clicking 'Game rules' will explain how to play the game with images of gameplay as well

//clicking 'High score list' will show either the highest score or the 3 highest scores

//clicking 'Start Game' will start the game

//#can 'Game rules' and 'high score list' be modals?###

//When player clicks 'start game' will be taken to the main game.

// manipulate dom to go to game view.

// game will have the name top center, with the answer hidden behind the name

//still deciding if i should include: 'help' menu will be in the top left with the directions popping up should the player need it.

//score will be in the top right

//timer will start when player makes first pick/            STRETCH

//color choices will be on the right side along the border, below which there will be a 'check answer button'.

//the player will have 10 chances to guess the code, and there will be 10 lines numbered 10-1 from top to bottom on the left side along the border
    //Start by making an empty guess array.
    //cache dom elements
    //generate an answer to compare with the user guesses.
    //player can start guessing via dom interface.
    //add guess to the guess array. (START WITH 1 GUESS AND WHEN THE CODE IS FUNCTIONAL JUST ADD GUESSES (li) TO AN INCREASING LIST (ul)).
    //if the guess is wrong and there are fewer than 10 guesses continue to the next guess, otherwise end game and show score/reset game button.
    //give feedback by manipulating dom.

//each number will have 4 blank circles to the right of it that will be filled up when the player clicks on a color choice from the color menu.

//the player will have the option to change his choices and so the answer will only be verified when player clicks 'check answer' button

//when player guesses and clicks 'check answer', there will be pegs on the right of his choices that indicate whether he made either a correct color choice (black peg), correct color and placement choice (white peg) or neither(no peg)

//if player guesses the wrong choices, they will get the pegs showing them what they got right, or no pegs if they didnt get anything right

// if player gets the answer right, 'game complete' message will pop up with time taken and points received, and options for a 'new game' or 'back to menu'

//if player gets high score 'new high score' message will pop.      STRETCH
