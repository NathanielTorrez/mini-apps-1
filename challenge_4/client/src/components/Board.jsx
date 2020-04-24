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
        console.log(this.state['56'] )
        return i
      }

    }
    return 'invalid'
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

    this.changePlayer();

  } else {
    console.log('invalid')
  }

    console.log(this.state.board)

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