import React, { Component } from 'react'
import { connect } from 'react-redux'

import './Notifier.css'

import { close } from '../../Actions/user.actions'

class MainError extends Component {
  render () {
    const { close, errors } = this.props;

    const $errors = errors.map(err => (
      <div className="Notifier-error" key={err.id}>
        <div className="message">{err.message}</div>

        <a className="Notifier-close" onClick={() => close(err.id)}>
          <i className="fa fa-times" aria-hidden="true" />
        </a>
      </div>
    ))

    return (
      <div className="Notifier">
        <div className="Notifier-center">{$errors}</div>
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