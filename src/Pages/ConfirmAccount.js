import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router'

import './ConfirmAccount.css'

import Footer from './Footer'

class ConfirmAccount extends Component {
  render () {
    return (
      <div className="ConfirmAccount">
        <div className="w-6">
          <Link to="/" className="ConfirmAccount-logo">WEBLAB</Link>

          <h1>Almost there...</h1>
          <h4>Please check your email to confirm your account</h4>

          <p>No confirmation email received? Please check your spam folder or</p>

          <a href="#" className="request">Request new confirmation email</a>
        </div>
      </div>
    )
  }
}

export default ConfirmAccount
