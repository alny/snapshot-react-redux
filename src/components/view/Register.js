import React, {Component} from 'react'

class Register extends Component {
  constructor(){
    super()
    this.state =  {
        registration: {
          username: '',
          password: ''
        }
    }
  }

  updateRegistration(event){
    event.preventDefault()
    let updated = Object.assign({}, this.state.registration)
    updated[event.target.id] = event.target.value
    this.setState({
      registration: updated
    })
    //console.log('updateRegistration: ' +  event.target.id + ' == ' + event.target.value)
  }

  submitRegistration(event){
    event.preventDefault()
    if(this.state.username.length == 0){
      alert('Please Inform Username')
      return
    }
    this.props.onRegister(this.state.registration)

  }

  render(){
    return(
      <div>
        <h3>Sign Up</h3>
        <input onChange={this.updateRegistration.bind(this)} id="username" className="form-control" type="text" placeholder="Username"/><br/>
        <input onChange={this.updateRegistration.bind(this)} id="password" className="form-control" type="text" placeholder="Password"/><br/>
        <button onClick={this.submitRegistration.bind(this)} className="btn btn-warning">Join</button>

      </div>
    )
  }
}

export default Register
