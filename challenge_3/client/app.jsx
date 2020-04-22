
class App extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      data: {},
      form: null
    }
    this.nextFormClick = this.nextFormClick.bind(this);
  }
  // handle switching forms
  nextFormClick(e) {

    e.preventDefault()

    if (this.state.form === null) {
      this.setState({
        form: 'form 1'
      })
    } else if (this.state.form === 'form 1') {
      this.setState({
        form: 'form 2'
      })
    } else if (this.state.form === 'form 2') {
      this.setState({
        form: 'completed'
      })
    }
  }


  render() {

    let currentForm;
    if(this.state.form === null) {

      currentForm =
      <div>
          <h1>Checkout</h1>
        <h3>Account Information</h3>
      <form>
        <label>Name:
        <input></input>
        </label>
        <label>Email:
        <input></input>
        </label>
        <label>Password:
        <input></input>
        </label>
        <button onClick={this.nextFormClick} >Next</button>
      </form>
      </div>

    } else if (this.state.form === 'form 1') {

     currentForm =
     <div>
         <h1>Checkout</h1>
       <h3>Shipping</h3>
     <form>
        <label> Address:
        <input></input>
        </label>
        <label>City:
        <input></input>
        </label>
        <label>state:
        <input></input>
        </label>
        <label>Zip-Code:
        <input></input>
        </label>
        <button onClick={this.nextFormClick}>Next</button>
      </form>
      </div>

    } else if (this.state.form === 'form 2') {

      currentForm =
      <div>
          <h1>Checkout</h1>
       <h3>Payment details</h3>
     <form>
        <label> Credit Card:
        <input></input>
        </label>
        <label>Expiration:
        <input></input>
        </label>
        <label>cvv:
        <input></input>
        </label>
        <label> Billing Zip-Code:
        <input></input>
        </label>
        <button onClick={this.nextFormClick}>Purchase</button>
      </form>
      </div>

    } else if (this.state.form === 'completed' ) {
     currentForm =
     <div>
         <h1>Checkout Completed</h1>
         <div>Thank you for your order! </div>
     </div>
    }
    return (
    <div>
      <div>{currentForm}</div>
    </div>
    )

  }

}