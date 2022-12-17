/*-------------------------------- Constants --------------------------------*/


const winningCombos =   [
                        [0, 1, 2],
                        [3, 4, 5],
                        [6, 7, 8],
                        [0, 3, 6],
                        [1, 4, 7],
                        [2, 5, 8],
                        [0, 4, 8],
                        [6, 4, 2]
]



/*---------------------------- Variables (state) ----------------------------*/
let board , turn, winner, tie


/*------------------------ Cached Element References ------------------------*/

const squareEls = document.querySelectorAll('.sqr')

const messageEl = document.getElementById('message')

const boardEl = document.querySelector('.board')

const resetBtn = document.getElementById('reset-btn')
/*----------------------------- Event Listeners -----------------------------*/

boardEl.addEventListener('click', handleClick)
/*-------------------------------- Functions --------------------------------*/

init()

function handleClick(evt) {
    let sqIdx = parseInt(evt.target.id.replace('sq', ''))
    if ( board[sqIdx] || winner) return
  placePiece(sqIdx)
  checkForTie()
  checkForWinner()
  switchPlayerTurn()
  render()
}

function checkForWinner() {
    winningCombos.forEach(combo => {
        if (Math.abs(board[combo[0]] + board[combo[1]]+ board[combo[2]]) ===
        3) {
            winner = true
        }
    })
}
function switchPlayerTurn() {
    if (winner) return 
    turn *= -1
    
}

function checkForTie () {
    if(board.includes(null))return
    tie = true
}


function placePiece(idx) {
    board[idx] = turn
}


function init() {
    
     board = [null, null, null, null, null, null, null, null, null]

    //  '1' represents player X
     turn = 1
    
    winner = false
    
    tie = false
    render()
    
}
// init function will initialize the game state of player

function render () {
    updateBoard()
    updateMessage()
}
// function updateBoard() {
//     for (i = 0; i < board.length; i++){
//         let currentSqr = squareEls[i]
//         // currentSqr.textContent = ""
//         if (board[i]=== -1){
//             currentSqr.textContent = "O"
//         } else if(board[i] ===1){
//             currentSqr.textContent = "X"
//         }
//     }
// }

function updateBoard(){

board.forEach((boardVal, idx) => {
if (boardVal === 1){
    // x ocupies the squareEls[idx] spot
    squareEls[idx].textContent = 'X'
} else if(boardVal === -1){
    //O occupies the squareEls[idx] spot
    squareEls[idx].textContent = 'O'
}else {
    // if its not 1 or -1, it MUST be null (blank square)
    squareEls[idx].textContent = ''
  }
 })
}



 function updateMessage(){

if(!winner && !tie) {
    messageEl.textContent= `its ${turn == 1 ? 'X' : 'O'}'s turn`
    } else if (!winner && tie){
        messageEl.textContent=`Itssa tie 😮‍💨`
    }else{
messageEl.textContent= `It's ${turn === 1 ? 'X' : 'O'} wins the game!`
    }
}