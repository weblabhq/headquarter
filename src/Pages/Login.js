import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router'

import './Login.css'

import { login, register, error } from '../Actions/user.actions'
import MainError from '../Components/Errors/MainError'

class Login extends Component {
  constructor (props) {
    super(props)

    this.state = {
      showRegister: false,
      username: ''
    }
  }

  onLogin (e) {
    e.preventDefault()

    const email = this.refs.loginEmail.value
    const password = this.refs.loginPassword.value

    if (!email) return this.props.error(new Error('Email can not be empty'))
    if (!password) return this.props.error(new Error('Password can not be empty'))

    // Make login request
    this.props.login(email, password)
  }

  onRegister (e) {
    e.preventDefault()

    const name = this.refs.name.value
    const email = this.refs.email.value
    const password = this.refs.password.value
    const username = this.refs.username.value
    const confirmPassword = this.refs.confirmPassword.value

    if (!name) return this.props.error(new Error('Name can not be empty'))
    if (!email) return this.props.error(new Error('Email can not be empty'))
    if (!username) return this.props.error(new Error('Username can not be empty'))
    if (!password) return this.props.error(new Error('Password can not be empty'))
    if (password !== confirmPassword) return this.props.error(new Error('Password and Password Confirmation do not match'))

    this.props.register(email, username, password)
  }

  onShowRegister (e) {
    e.preventDefault()
    this.setState({ showRegister: true })
  }

  onCloseRegister (e) {
    e.preventDefault()
    this.setState({ showRegister: false })
  }

  generateUsername (value) {
    return (value || '').split('@')[0].replace(/\W/, '')
  }

  onEmailChange () {
    this.setState({
      username: this.generateUsername(this.refs.email.value)
    })
  }

  render () {
    const register = !this.state.showRegister
      ? (
        <div className="register-text">
          <h4>Don't have an account yet?</h4>
          <a href="#" onClick={(e) => this.onShowRegister(e)}>I want to sign up!</a>
        </div>
      )
      : (
        <div>
          <h3>Sign up with your email address</h3>

          <form onSubmit={(e) => this.onRegister(e)} autoComplete="off">
            <label className="wl-label" htmlFor='name'>Name</label>
            <input
              className="wl-input"
              type='text'
              placeholder=''
              title='Please enter your name'
              required='' defaultValue=''
              ref="name" />

            <label className="wl-label" htmlFor='email'>Email</label>
            <input
              className="wl-input"
              type='text'
              placeholder=''
              title='Please enter your email'
              required='' defaultValue=''
              autoComplete="off"
              onChange={(e) => this.onEmailChange(e)}
              ref="email" />

            <label className="wl-label" htmlFor='username'>Username</label>
            <input
              className="wl-input"
              type='text'
              placeholder=''
              title='Please enter your email'
              required='' value={this.state.username}
              ref="username" />

            <label className="wl-label" htmlFor='email'>Password</label>
            <input
              className="wl-input"
              type='password'
              placeholder=''
              title='Please enter your password'
              required='' defaultValue=''
              autoComplete="off"
              ref="password" />

            <label className="wl-label" htmlFor='email'>Password Confirmation</label>
            <input
              className="wl-input"
              type='password'
              placeholder=''
              title='Please confirm your password'
              required='' defaultValue=''
              ref="confirmPassword" />
            
            <div>
              <input className="wl-input" type="submit" value="Sign up"></input>
              <a href="#"
                className="wl-button-secondary"
                onClick={(e) => this.onCloseRegister(e)}>
                Cancel
              </a>
            </div>
          </form>
        </div>
      )

    return (
      <div className="Login">
        <MainError />

        <div className="Login-container w-6">
          <Link to="/" className="Login-logo">WEBLAB</Link>

          <div className="w-6 left">
            <h3>Sign in with your email address</h3>

            <form onSubmit={(e) => this.onLogin(e)}>
              <label className="wl-label" htmlFor='email'>Email</label>
              <input
                className="wl-input"
                type='text'
                placeholder=''
                title='Please enter your email'
                required='' defaultValue=''
                ref="loginEmail" />

              <label className="wl-label" htmlFor='email'>Password</label>
              <input
                className="wl-input"
                type='password'
                placeholder=''
                title='Please enter your password'
                required='' defaultValue=''
                ref="loginPassword" />
              
              <div>
                <input className="wl-input" type="submit" value="Login"></input>
              </div>
            </form>
          </div>

          <div className="w-6 right">
            <h3>Sign in with your favorite provider</h3>

            <div>
              <a className="social github">
                <i className="fa fa-github" aria-hidden="true"></i>
                GitHub
              </a>
            </div>

            <div>
              <a className="social bitbucket">
                <i className="fa fa-bitbucket" aria-hidden="true"></i>
                Bitbucket
              </a>
            </div>

            <div>
              <a className="social gitlab">
                <i className="fa fa-gitlab" aria-hidden="true"></i>
                GitLab
              </a>
            </div>
          </div>

          <div className="register">
            {register}
          </div>
        </div>
      </div>
    )
  }
}

export default connect(null, {
  login,
  register,
  error
})(Login)
