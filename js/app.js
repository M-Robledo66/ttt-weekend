/*-------------------------------- Constants --------------------------------*/
let board = [null, null, null, null, null, null, null, null, null]

//  '1' represents player X
let turn = '1'

let winner = false

let tie = false
 



/*---------------------------- Variables (state) ----------------------------*/



/*------------------------ Cached Element References ------------------------*/

const squareEls = document.getElementsByClassName('board')

const messageEl = document.getElementById('message')
/*----------------------------- Event Listeners -----------------------------*/



/*-------------------------------- Functions --------------------------------*/


// init function will initialize the game state of player
function init(params) {
 
   function render()
}
function render (params) {
}
function updateBoard(params) {
    for (i = 0; i < board.length; i++){
        let currentSqr = square[i]
        currentSqr.textContent = ""
        if (board[i]=== -1){
            currentSqr.textContent = "O"
        } else if(board[i] ===1){
            currentSqr.textContent = "X"
        }
    }
}

 function updateMessage()

