// define the board
let board = [[0, 0, 0],
             [0, 0, 0],
             [0, 0, 0]]

//HANDLES THE RENDERING OF X OR O

let playerTurn = true;

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
  cellToChange.innerHTML = symbol;

  toggleXorO()
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


