import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router'
import cx from 'classnames'

import './Login.css'

import { login, register, error } from '../Actions/user.actions'
import Notifier from '../Components/Notifier/Notifier'

class Login extends Component {
  constructor (props) {
    super(props)

    this.state = {
      showRegister: false,
      disableLogin: false,
      disableRegister: false,
    }
  }

  onLogin (e) {
    e.preventDefault()

    if (this.state.disableLogin) return;

    const email = this.refs.email.value
    const password = this.refs.password.value

    if (!email) return this.props.error(new Error('Email can not be empty'))
    if (!password) return this.props.error(new Error('Password can not be empty'))

    // Make login request
    this.setState({ disableLogin: true })
    this.props.login(email, password)
      .then(() => this.setState({ disableLogin: false }))
      .catch(() => this.setState({ disableLogin: false }))
  }

  onRegister (e) {
    e.preventDefault()

    if (this.state.disableRegister) return;

    const email = this.refs.email.value
    const password = this.refs.password.value

    if (!email) return this.props.error(new Error('Email can not be empty'))
    if (!password) return this.props.error(new Error('Password can not be empty'))

    this.setState({ disableRegister: true })
    this.props.register(email, password)
      .then(() => this.setState({ disableRegister: false }))
      .catch(() => this.setState({ disableRegister: false }))
  }

  onShowRegister (e) {
    e.preventDefault()
    this.setState({ showRegister: true })
  }

  onCloseRegister (e) {
    e.preventDefault()
    this.setState({ showRegister: false })
  }

  signup () {
    return (
      <div>
        <div className="w-12">
          <form onSubmit={(e) => this.onLogin(e)}>
            <div className="wl-input-wrapper">
              <span className="wl-input-icon">
                <i className="fa fa-envelope-o" aria-hidden="true"></i>
              </span>

              <input
                className="wl-input"
                type='text'
                placeholder='you@example.com'
                title='Please enter your email'
                required='' defaultValue=''
                ref="email" />
            </div>

            <div className="wl-input-wrapper">
              <span className="wl-input-icon">
                <i className="fa fa-lock" aria-hidden="true"></i>
              </span>

              <input
                className="wl-input"
                type='password'
                placeholder='your password'
                title='Please enter your password'
                required='' defaultValue=''
                ref="password" />
            </div>
            
            <div>
              <input className={cx('wl-input submit', { 'disabled': this.state.disableLogin })}
                type="submit" value="Log In"></input>
            </div>

            <div className="text-center">
              <a href="#" className="remember">Don't remember your password?</a>
            </div>
          </form>
        </div>
      </div>
    )
  }

  register () {
    return (
      <div>
        <form onSubmit={(e) => this.onRegister(e)} autoComplete="off">
          <div className="wl-input-wrapper">
            <span className="wl-input-icon">
              <i className="fa fa-envelope-o" aria-hidden="true"></i>
            </span>

            <input
              className="wl-input"
              type='text'
              placeholder='you@example.com'
              title='Please enter your email'
              required='' defaultValue=''
              ref="email" />
          </div>

          <div className="wl-input-wrapper">
            <span className="wl-input-icon">
              <i className="fa fa-lock" aria-hidden="true"></i>
            </span>

            <input
              className="wl-input"
              type='password'
              placeholder='your password'
              title='Please enter your password'
              required='' defaultValue=''
              ref="password" />
          </div>
          
          <div>
            <input className={cx('wl-input submit', { 'disabled': this.state.disableRegister })}
              type="submit" value="Sign up"></input>
          </div>
        </form>
      </div>
    )
  }

  render () {
    const pannel = !this.state.showRegister
      ? this.signup()
      : this.register()

    return (
      <div className="Login">
        <Notifier />

        <div className="Login-container">
          <Link to="/" className="Login-logo">WEBLAB</Link>

          <div className="w-12">
            <a href="#login"
              onClick={(e) => this.onCloseRegister(e)}
              className={cx('menu-btn', { 'active': !this.state.showRegister })}>
              Log in
            </a>

            <a href="#signup"
              onClick={(e) => this.onShowRegister(e)}
              className={cx('menu-btn', { 'active': this.state.showRegister })}>
              Sign up
            </a>
          </div>

          <div className="w-12">
            <div className="w-4 p-r-5">
              <a className="social github">
                <i className="fa fa-github" aria-hidden="true"></i>
                GitHub
              </a>
            </div>

            <div className="w-4 p-r-5">
              <a className="social bitbucket">
                <i className="fa fa-bitbucket" aria-hidden="true"></i>
                Bitbucket
              </a>
            </div>

            <div className="w-4">
              <a className="social gitlab">
                <i className="fa fa-gitlab" aria-hidden="true"></i>
                GitLab
              </a>
            </div>
          </div>

          <div className="separator">
            <span className="text">or</span>
          </div>

          {pannel}
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
