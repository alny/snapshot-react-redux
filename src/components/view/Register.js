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
    if(this.state.registration.username.length == 0){
      alert('Please Inform Username')
      return
    }
    if(this.state.registration.password.length == 0){
      alert('Please Inform Password')
      return
    }
    this.props.onRegister(this.state.registration)

  }

  submitLoginCredentials(event){
    event.preventDefault()
    if(this.state.registration.username.length == 0){
      alert('Please Inform Username')
      return
    }
    if(this.state.registration.password.length == 0){
      alert('Please Inform Password')
      return
    }
    this.props.onLogin(this.state.registration)
  }

  render(){
    return(
      <div>
        <h3>Sign Up or Login</h3>
        <input onChange={this.updateRegistration.bind(this)} id="username" className="form-control" type="text" placeholder="Username"/><br/>
        <input onChange={this.updateRegistration.bind(this)} id="password" className="form-control" type="text" placeholder="Password"/><br/>
        <ul className="actions">
					    <li><input onClick={this.submitRegistration.bind(this)} type="submit" value="Join"/></li>
				</ul>
        <ul className="actions">
              <li><input onClick={this.submitLoginCredentials.bind(this)} type="submit" value="Login"/></li>
        </ul>
        


      </div>
    )
  }
}

export default Register
