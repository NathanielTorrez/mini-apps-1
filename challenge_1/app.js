// define the board
let board = [[0, 0, 0],
             [0, 0, 0],
             [0, 0, 0]];


let row1 = board[0];
let row2 = board[1];
let row3 = board[2];
let rows = [row1,row2, row3]

let playerTurn = true;
let gameOver   = false;
let winningMessage = null;

// HANDLES GAME OVER

let gameOverHandler = () => {

}


// HANDLES CHANGING THE BOARD FOR GAME LOGIC
let checkDiagnol = () => {

}


let checkVertical = () => {

   for ( var i = 0; i < rows.length; i++) {

      let currentIndex = i
      let xCounter = 0
      let oCounter = 0

    for ( var j = 0; j < rows.length; j++) {
      let currentRow = rows[j]
      if (currentRow[currentIndex] === 1) {
        xCounter++

      } else if ( currentRow[currentIndex] === 2) {
        oCounter++
      }

      if (xCounter > 2) {
        gameOver = true
        console.log('x vertical win')

      } else if (oCounter > 2) {
        gameOver = true
        console.log('o vertical win')
      }
      if (gameOver) {
        // TODO : CREATE LOGIC FOR IF IT IS GAME OVER
      }
    }
   }
}

let checkHorizontal = () => {

  for ( var i = 0; i < rows.length; i++) {

    var xCounter = 0;
    var oCounter = 0;
    var currentRow = rows[i]

    for (var j = 0; j < rows.length; j++) {

      if (currentRow[j] === 1) {
        xCounter ++

      } else if (currentRow[j] === 2) {
        oCounter++
      }

      if (oCounter > 2) {

        gameOver = true;
        winningMessage = " O player wins"

        console.log('O horizontal win')

      } else if (xCounter > 2) {
        gameOver = true
        winningMessage = " X Player wins"
        console.log(' X horizontal win')
      }
      if (gameOver) {
        //  TODO CREATE GAME OVER LOGIC

      }
    }
  }
}


let checkWinningCondition = () => {

  checkHorizontal();
  checkVertical();
  checkDiagnol();

}



let updateBoard = (coordinate) => {


  let x = coordinate[1];
  let y = coordinate[4];

  if (playerTurn) {
    board[x][y] = 1
  } else {
    board[x][y] = 2
  }
  checkWinningCondition()
}

//HANDLES THE RENDERING OF X OR O



let toggleXorO = () => {
  playerTurn = !playerTurn
}


let addXorO = (event) => {

  if (playerTurn) {
    var symbol = 'X'
  } else {
    var symbol = 'O'
  }

  let cellToChange = event.target;

  let coordinate = cellToChange.getAttribute("value")

  updateBoard(coordinate)

  if (cellToChange.innerHTML.length === 0) {

    cellToChange.innerHTML = symbol;
    toggleXorO()
  };
}


// apply an event listner to all items of the table

let clickHandler = (event) => {

  let cells = document.getElementById("table").querySelectorAll("td");

  for (var i = 0; i < cells.length; i++) {

    let currentCell = cells[i]
    // TODO: change this function to something useful
    currentCell.addEventListener("click", addXorO)
  }
};
clickHandler()


