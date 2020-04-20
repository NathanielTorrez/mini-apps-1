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
setTimeout(() => { window.alert( winningMessage + " please restart ")}, 200)

}


// HANDLES CHANGING THE BOARD FOR GAME LOGIC
let checkDiagnol = () => {

  if ( row1[0] === 1 && row2[1] === 1 && row3[2] === 1 || row1[2] === 1 && row2[1] === 1 && row3[0] === 1  ) {
    // TODO HANDLE GAME OVER LOGIC
    gameOver = true
    winningMessage = 'X Diagnol win'
    return true

  } else if ( row1[0] === 2 && row2[1] === 2 && row3[2] === 2 || row1[2] === 2 && row2[1] === 2 && row3[0] === 2 ) {

    gameOver = true
    winningMessage = 'O diagnol win'
    return true
  }

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
        winningMessage =  'X vertical win'
        xCounter = 0;
        oCounter = 0;
        return true;
        break

      } else if (oCounter > 2) {
        gameOver = true
        winningMessage = 'O vertical win'
        xCounter = 0;
        oCounter = 0;
        return true
        break
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
        winningMessage = " O horizontal win"
        xCounter = 0;
        oCounter = 0;
        return true
        break

      } else if (xCounter > 2) {
        gameOver = true
        winningMessage = " X horizontal win"
        xCounter = 0;
        oCounter = 0;
        return true
        break
      }
    }
  }
}


let checkWinningCondition = () => {

  if( (checkHorizontal()) || (checkVertical()) || (checkDiagnol()) ) {
    gameOverHandler()
  }

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

//  HANDLE RESET OF BOARD

let boardReset = (event) => {

  let board = [[0, 0, 0],
               [0, 0, 0],
               [0, 0, 0]] ;

  let cells = document.getElementById("table").querySelectorAll("td");

  for (var i = 0; i < cells.length; i++) {

    let currentCell = cells[i]

    currentCell.innerHTML = "";
  }

}

document.getElementById('reset').addEventListener('click', boardReset)


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


