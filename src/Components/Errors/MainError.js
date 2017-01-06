import React, { Component } from 'react'
import { connect } from 'react-redux'

import './MainError.css'

import { close } from '../../Actions/user.actions'

class MainError extends Component {
  render () {
    const { close, errors } = this.props;

    const $errors = errors.map(err => (
      <div className="error show" key={err.id}>
        <span>{err.message}</span>

        <a className="Notify-close" onClick={() => close(err.id)}>
          <i className="fa fa-times" aria-hidden="true" />
        </a>
      </div>
    ))

    return (
      <div className="MainError">
        <div className="center">{$errors}</div>
      </div>
    )
  }
}

const mapStateToProps = (state, props) => {
  return {
    errors: state.errors
  }
}

export default connect(
  mapStateToProps, {
    close
  }
)(MainError)