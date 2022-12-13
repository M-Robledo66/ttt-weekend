/*-------------------------------- Constants --------------------------------*/


const winningCombos =   [0, 1, 2],
                        [3, 4, 5],
                        [6, 7, 8],
                        [0, 3, 6],
                        [1, 4, 7],
                        [2, 5, 8],
                        [0, 4, 8],
                        [6, 4, 2]
 



/*---------------------------- Variables (state) ----------------------------*/



/*------------------------ Cached Element References ------------------------*/

const squareEls = document.getElementsByClassName('board')

const messageEl = document.getElementById('message')

const boardEl = document.querySelector('.board')

const resetBtn = document.getElementById('reset-btn')
/*----------------------------- Event Listeners -----------------------------*/

boardEl.handleClick(evt){
    console.log('handle click invoked');
}

/*-------------------------------- Functions --------------------------------*/
init(board)


function handleClick(evt) {
    // bubbling
    // you will need parent element
    const sqIdx = parseInt(evt.target.id.replace('sq', ''))
    if (isNaN (sqIdx || board[sqIdx] || winner)) return
  placePiece(sqIdx)
  checkFOrTie()
  render()
}

function checkForWinner() {
    winningCombos.forEach(combo =>{
        if(Math.abs(board[combo[0]] + board[combo[1]]+ board[combo[2]]) ===
        30){
            winner = true
        }
    })
}
function switchPlayerTurn() {
    if (!winner) turn *= -1
    
}







function placePiece(idx) {
    board[idx] = turn
}
function checkFOrTie () {
    if(board.inclueds(null))return
    tie = true
}


function init() {let board = [null, null, null, null, null, null, null, null, null]

    //  '1' represents player X
    let turn = 1
    
    let winner = false
    
    let tie = false
    render()
    
}
// init function will initialize the game state of player
function init() {
 
   render()
}
function render () {
    updateBoard()
    updateMessage()
}
function updateBoard() {
    for (i = 0; i < board.length; i++){
        let currentSqr = squareEls[i]
        // currentSqr.textContent = ""
        if (board[i]=== -1){
            currentSqr.textContent = "O"
        } else if(board[i] ===1){
            currentSqr.textContent = "X"
        }
    }
}
/*
function updateBoard()

board.forEach((val, idx =>{
if (val === 1){
    // x ocupies the squareEls[idx] spot
} else if(val === -1){
    //O occupies the squareEls[idx] spot
    squareEls[idx].textContent = 'O'
}else {
    // if its not 1 or -1, it MUST be null (blank square)
    squareEls.[idx]..textContent = ' '
  }
 })
}

*/



 function updateMessage(){


if (winner === false && tie === false){
    // render whose turn it is
    messageEl.textContent= `Player ${turn === 1 ? "X" : "O"} turn is next`

} else if (winner === false && tie === true) {
    messageEl.textContent = "Its a Tie! 😮‍💨"


} else {
 // render a congratulatory message
 messageEl.textContent = "You Win! 👑"}
 }


