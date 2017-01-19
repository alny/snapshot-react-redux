import React, { Component } from 'react'
import { Register } from '../view'
import { connect } from 'react-redux'
import actions from '../../actions'

class Account extends Component {

  componentDidMount(){
    this.props.checkCurrentUser()

  }

  register(registration){
    //console.log('Register: ' + JSON.stringify(registration))
    this.props.signUp(registration)

  }

  login(credentials){
    console.log('LOGIN: ' + JSON.stringify(credentials))
  //  this.props.signUp(registration)
    this.props.login(credentials)


  }

  render(){

    const currentUser = this.props.account.user

    return(
      <div>
        <h2>Account</h2>
          {
            (currentUser == null) ? <Register onRegister={this.register.bind(this)} onLogin={this.login.bind(this)}/> : <h2>Welcome {currentUser.username}</h2>

          }
      </div>
    )
  }
}

const stateToProps = (state) => {
  return {
    account: state.account

  }
}

const dispatchToProps = (dispatch) => {
  return {
    signUp: (params) => dispatch(actions.signUp(params)),
    login: (params) => dispatch(actions.login(params)),
    checkCurrentUser: () => dispatch(actions.checkCurrentUser())

  }
}

export default connect(stateToProps, dispatchToProps)(Account)
