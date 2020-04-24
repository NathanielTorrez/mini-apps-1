import React from 'React';
import Board from './Board.jsx'

class App extends React.Component {

  constructor(props) {
    super(props)

    this.state = {

    }
  }


  render() {
    return (
      <div >
      <h1 id='head'>GOLD RUSH</h1>
      < Board/>
      </div>
    )
  }
}
export default App

