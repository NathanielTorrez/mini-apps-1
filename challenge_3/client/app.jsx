
class App extends React.Component {

  constructor(props) {
    super(props)

    this.state = {

      form: 'homepage',
      name: "",
      email: "",
      password: "",
      address: "",
      city: "",
      state1: "",
      zipcode1: "",
      cardNum: "",
      expiration: "",
      cvv: "",
      billZip: ""
    }

    this.nextFormClick = this.nextFormClick.bind(this);
    this.updateData    = this.updateData.bind(this);
    this.sendToServer  = this.sendToServer.bind(this);
  }

  // handle switching forms
  nextFormClick(e) {

    e.preventDefault()
    if (this.state.form === 'homepage') {
       this.setState({
         form:null
       })
    } else if (this.state.form === null) {
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
    } else if (this.state.form === 'completed') {
      this.setState({
        form: 'homepage'
      })
    }
  }

  // handle upadating the state
  updateData(e) {

    var dataProp = e.target.id;
    var value = e.target.value;

    this.setState({
      [dataProp]: value
    })
  }

  // handle ajax request to the server

  sendToServer(e){
    e.preventDefault()

    var formData = {
      name:this.state.name,
      email:this.state.email,
      password: this.state.password,
      address: this.state.address,
      city:this.state.city,
      state:this.state.state1,
      zipcode1:this.state.zipcode1,
      cardNum:this.state.cardNum,
      expiration:this.state.expiration,
      cvv:this.state.cvv,
      billZip:this.state.billZip
    }
    console.log(formData)

    console.log('made it to sendToServer')
    axios.post('http://localhost:3000/', formData)
    .then(() => {console.log('success')})
    .catch((error) => {console.error(error) })

    this.setState({
      form: 'homepage'
    })

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
        <input value={this.state.name} id="name" onChange={this.updateData}></input>
        </label>
        <label>Email:
         <input value={this.state.email}  onChange={this.updateData}  id="email"></input>
        </label>
        <label>Password:
        <input value={this.state.password}  onChange={this.updateData} id="password"></input>
        </label>
      </form>
        <button onClick={this.nextFormClick} >Next</button>
      </div>

    } else if (this.state.form === 'form 1') {

     currentForm =
     <div>
         <h1>Checkout</h1>
       <h3>Shipping</h3>
     <form>
        <label> Address:
        <input value={this.state.address} onChange={this.updateData} id="address"></input>
        </label>
        <label>City:
        <input value={this.state.city} onChange={this.updateData} id="city"></input>
        </label>
        <label>state:
        <input value={this.state.state1} onChange={this.updateData} id="state1"></input>
        </label>
        <label >Zip-Code:
        <input value={this.state.zipcode1} id="zipcode1" onChange={this.updateData}></input>
        </label>
      </form>
        <button onClick={this.nextFormClick}>Next</button>
      </div>

    } else if (this.state.form === 'form 2') {

      currentForm =
      <div>
          <h1>Checkout</h1>
       <h3>Payment details</h3>
     <form>
        <label> Credit Card:
        <input value={this.state.cardNum}  onChange={this.updateData} id="cardNum"></input>
        </label>
        <label>Expiration:
        <input value={this.state.expiration}  onChange={this.updateData} id="expiration"></input>
        </label>
        <label>cvv:
        <input value={this.state.cvv}  onChange={this.updateData} id="cvv"></input>
        </label>
        <label> Billing Zip-Code:
        <input value={this.state.billZip}  onChange={this.updateData} id="billZip" ></input>
        </label>
      </form>
        <button onClick={this.sendToServer}>Purchase</button>
      </div>

    } else if (this.state.form === 'completed' ) {
     currentForm =
     <div>
         <h1>Checkout Completed</h1>
         <div>Thank you for your order! </div>
         <button onClick={this.nextFormClick} >return Home</button>
     </div>
    } else if (this.state.form === 'homepage') {
      currentForm =
      <div>
        <h1>Ready to Checkout?</h1>
        <button onClick={this.nextFormClick} >Next</button>
      </div>
    }
    return (
    <div>
      <div>{currentForm}</div>
    </div>
    )

  }

}