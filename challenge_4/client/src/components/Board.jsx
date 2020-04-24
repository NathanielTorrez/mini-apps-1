import React from 'react';

class Board extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      board : [
      [0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0]
    ],
      currentPlayer: 'gold'
      ,
      '00' : '',
      '01' : '',
      '02' : '',
      '03' : '',
      '04' : '',
      '05' : '',
      '06' : '',
      '10' : '',
      '11' : '',
      '12' : '',
      '13' : '',
      '14' : '',
      '15' : '',
      '16' : '',
      '20' : '',
      '21' : '',
      '22' : '',
      '23' : '',
      '24' : '',
      '25' : '',
      '26' : '',
      '30' : '',
      '31' : '',
      '32' : '',
      '33' : '',
      '34' : '',
      '35' : '',
      '36' : '',
      '40' : '',
      '41' : '',
      '42' : '',
      '43' : '',
      '44' : '',
      '45' : '',
      '46' : '',
      '50' : '',
      '51' : '',
      '52' : '',
      '53' : '',
      '54' : '',
      '55' : '',
      '56' : ''
    }
    this.changeBoard = this.changeBoard.bind(this);
    this.changePlayer = this.changePlayer.bind(this);
  }

  changePlayer() {
    if (this.state.currentPlayer === 'gold') {
      this.setState({
        currentPlayer: 'silver'
      })
    } else{
      this.setState({
        currentPlayer: 'gold'
      })
    }
  }


  dropTheChip(row,column) {
    var board = this.state.board;

    for ( var i = 5; i >= 0; i--) {

      if (board[i][column] === 0 ) {
        var num = ('' + i) + column;
        this.setState({
          [num]: this.state.currentPlayer
        })
        return i
      }

    }
    return 'invalid'
  }

  // winning logic

  checkRow() {

    for( var i = 0; i <= 5; i++) {

      var currentRow = this.state.board[i];
      var goldCount  = 0
      var silverCount = 0

      for (var j = 0; j <= 6; j++) {

        if (currentRow[j] === 'gold') {
          goldCount++
        } else if (currentRow[j] === 'silver') {
          silverCount++
        }
        if ( goldCount > 3 ) {
          return true
        }
        if (silverCount > 3) {
          return true
        }
      }
    }
    return false;

  }

  checkColumn() {

    // column is board[0][1] board [1][1] board[2][1] board[3][1] board[4][1] board [5][1]

    for ( var i = 0; i <= 6; i ++) {

      var goldCount = 0
      var silverCount = 0

      for (var j = 0; j <= 5; j++) {

        var columnEle = this.state.board[j][i];

        if (columnEle === 'gold') {
          goldCount++
        } else if ( columnEle === 'silver') {
          silverCount++
        }

        if ( goldCount > 3 ) {
          return true
        }
        if (silverCount > 3) {
          return true
        }
      }
    }
      return false
  }

  checkDown(row, column) {
    // times checked counter at 1

    var counter = 0;
    var board = this.state.board;
    // while incrementer is less than 5
    var goldCount = 0;
    var silverCount = 0;


    while (counter < 5) {
    // current row = row + count
    var currentRow = row + counter;
    //current column = column + count
    var currentColumn = parseInt(column) + counter;
    //if current row > 5 or current column > 6 return false
    if (currentRow > 5 || currentColumn > 6 ) {
      return false
    }

    // check board at row + 1 and y + 1

    if (board[currentRow][currentColumn] === 'gold') {

      goldCount++
      if (goldCount > 3) {
        return true
      }

    } else if (board[currentRow][currentColumn] === 'silver') {
      silverCount++

      if (silverCount > 3) {
        return true
      }
    }
      counter++
    }
    return false
  }

  checkLeft(row,column) {

    var counter = 0;
    var board = this.state.board;
    // while incrementer is less than 5
    var goldCount = 0;
    var silverCount = 0;


    while (counter < 5) {
    // current row = row + count
    var currentRow = row + counter;
    //current column = column + count
    var currentColumn = parseInt(column) - counter;
    //if current row > 5 or current column > 6 return false
    if (currentRow > 5 || currentColumn < 0 ) {
      return false
    }

    // check board at row + 1 and y + 1

    if (board[currentRow][currentColumn] === 'gold') {

      goldCount++
      if (goldCount > 3) {
        return true
      }

    } else if (board[currentRow][currentColumn] === 'silver') {
      silverCount++

      if (silverCount > 3) {
        return true
      }
    }
      counter++
    }
    return false

    }

    checkDown(row, column) {
      // times checked counter at 1

      var counter = 0;
      var board = this.state.board;
      // while incrementer is less than 5
      var goldCount = 0;
      var silverCount = 0;


      while (counter < 5) {
      // current row = row + count
      var currentRow = row + counter;
      //current column = column + count
      var currentColumn = parseInt(column) + counter;
      //if current row > 5 or current column > 6 return false
      if (currentRow > 5 || currentColumn > 6 ) {
        return false
      }

      // check board at row + 1 and y + 1

      if (board[currentRow][currentColumn] === 'gold') {

        goldCount++
        if (goldCount > 3) {
          return true
        }

      } else if (board[currentRow][currentColumn] === 'silver') {
        silverCount++

        if (silverCount > 3) {
          return true
        }
      }
        counter++
      }
      return false

  }

  checkDiagnol(row, column) {

    // check each element using a nested array
    // if an element is a gold or silver start new function checkDown

    if (this.checkDown(row, column)) {
      return true
    } else if(this.checkLeft(row,column)) {
      return true
    }
  return false
  }

  winCheck(row,column) {

    if (this.checkRow()) {
     return true
    }
    if (this.checkColumn()) {
     return true
    }
    if (this.checkDiagnol(row, column)) {
     return true
    }
    return false
  }
  changeBoard(e) {

    e.preventDefault();

    // gather coordinates
    var row = e.target.getAttribute("data-x");
    var column = e.target.getAttribute("data-y");

     // get the true value of y

      var trueRow = this.dropTheChip(row,column);

    //validate and add to board

    if (trueRow !== 'invalid') {

    var mockBoard = this.state.board;

    mockBoard[trueRow][column] = this.state.currentPlayer;

    this.setState({
      board: mockBoard
    })


    // change to next player

    if (this.winCheck(trueRow,column)) {
     setTimeout(() => {
       this.changePlayer()
       window.alert(`${this.state.currentPlayer} WINS! Please restart to play again`)}, 300)
    };

    this.changePlayer();

  } else {
    window.alert('invalid placement please select another')
  }


  }


render() {
    return (
  <table border="1">
    <tr>
    <td onClick={this.changeBoard} className={this.state['00']} data-x="0" data-y="0" ></td>
    <td onClick={this.changeBoard} className={this.state['01']} data-x="0" data-y="1" ></td>
    <td onClick={this.changeBoard} className={this.state['02']} data-x="0" data-y="2" ></td>
    <td onClick={this.changeBoard} className={this.state['03']} data-x="0" data-y="3" ></td>
    <td onClick={this.changeBoard} className={this.state['04']} data-x="0" data-y="4" ></td>
    <td onClick={this.changeBoard} className={this.state['05']} data-x="0" data-y="5" ></td>
    <td onClick={this.changeBoard} className={this.state['06']} data-x="0" data-y="6" ></td>
    </tr>
    <tr>
    <td onClick={this.changeBoard} className={this.state['10']}  data-x="1" data-y="0"></td>
    <td onClick={this.changeBoard} className={this.state['11']}  data-x="1" data-y="1"></td>
    <td onClick={this.changeBoard} className={this.state['12']}  data-x="1" data-y="2"></td>
    <td onClick={this.changeBoard} className={this.state['13']}  data-x="1" data-y="3"></td>
    <td onClick={this.changeBoard} className={this.state['14']}  data-x="1" data-y="4"></td>
    <td onClick={this.changeBoard} className={this.state['15']}  data-x="1" data-y="5"></td>
    <td onClick={this.changeBoard} className={this.state['16']}  data-x="1" data-y="6"></td>
    </tr>
    <tr>
    <td onClick={this.changeBoard} className={this.state['20']}  data-x="2" data-y="0"></td>
    <td onClick={this.changeBoard} className={this.state['21']}  data-x="2" data-y="1"></td>
    <td onClick={this.changeBoard} className={this.state['22']}  data-x="2" data-y="2"></td>
    <td onClick={this.changeBoard} className={this.state['23']}  data-x="2" data-y="3"></td>
    <td onClick={this.changeBoard} className={this.state['24']}  data-x="2" data-y="4"></td>
    <td onClick={this.changeBoard} className={this.state['25']}  data-x="2" data-y="5"></td>
    <td onClick={this.changeBoard} className={this.state['26']}  data-x="2" data-y="6"></td>
    </tr>
    <tr>
    <td onClick={this.changeBoard} className={this.state['30']}  data-x="3" data-y="0" ></td>
    <td onClick={this.changeBoard} className={this.state['31']}  data-x="3" data-y="1" ></td>
    <td onClick={this.changeBoard} className={this.state['32']}  data-x="3" data-y="2" ></td>
    <td onClick={this.changeBoard} className={this.state['33']}  data-x="3" data-y="3" ></td>
    <td onClick={this.changeBoard} className={this.state['34']}  data-x="3" data-y="4" ></td>
    <td onClick={this.changeBoard} className={this.state['35']}  data-x="3" data-y="5" ></td>
    <td onClick={this.changeBoard} className={this.state['36']}  data-x="3" data-y="6" ></td>
    </tr>
    <tr>
    <td onClick={this.changeBoard} className={this.state['40']} data-x="4" data-y="0" ></td>
    <td onClick={this.changeBoard} className={this.state['41']} data-x="4" data-y="1" ></td>
    <td onClick={this.changeBoard} className={this.state['42']} data-x="4" data-y="2" ></td>
    <td onClick={this.changeBoard} className={this.state['43']} data-x="4" data-y="3" ></td>
    <td onClick={this.changeBoard} className={this.state['44']} data-x="4" data-y="4" ></td>
    <td onClick={this.changeBoard} className={this.state['45']} data-x="4" data-y="5" ></td>
    <td onClick={this.changeBoard} className={this.state['46']} data-x="4" data-y="6" ></td>
    </tr>
    <tr>
    <td className={this.state['50']} onClick={this.changeBoard} data-x="5" data-y="0"></td>
    <td className={this.state['51']} onClick={this.changeBoard} data-x="5" data-y="1"></td>
    <td className={this.state['52']}  onClick={this.changeBoard} data-x="5" data-y="2"></td>
    <td className={this.state['53']} onClick={this.changeBoard} data-x="5" data-y="3"></td>
    <td className={this.state['54']} onClick={this.changeBoard} data-x="5" data-y="4"></td>
    <td className={this.state['55']} onClick={this.changeBoard} data-x="5" data-y="5"></td>
    <td className={this.state['56']} onClick={this.changeBoard} data-x="5" data-y="6"></td>
    </tr>
    </table>
   )
  }
}
export default Board