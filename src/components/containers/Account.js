import React, { Component } from 'react'
import { Register } from '../view'
import { connect } from 'react-redux'
import actions from '../../actions'

class Account extends Component {

  register(registration){
    console.log('Register: ' + JSON.stringify(registration))
  }

  render(){
    return(
      <div>
        <h2>Account</h2>
          <Register onRegister={this.register.bind(this)}/>
      </div>
    )
  }
}

const stateToProps = (state) => {
  return {

  }
}

const dispatchToProps = (dispatch) => {
  return {

  }
}

export default connect(stateToProps, dispatchToProps)(Account)
