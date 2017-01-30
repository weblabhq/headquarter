import React, { Component } from 'react'
import { connect } from 'react-redux'
import cx from 'classnames'

import './Notifier.css'

import { close } from '../../Actions/notifications.actions'

class Notifier extends Component {
  constructor (props) {
    super(props)
    this.state = {
      timers: {}
    }
  }

  componentWillReceiveProps (nextProps) {
    // Timers
    nextProps.notifications.forEach((err) => {
      const timers = this.state.timers

      if (!timers[err.id]) {
        timers[err.id] = setTimeout(() => { this.props.close(err.id) }, this.props.timeout)
        this.setState({ timers })
      }
    })
  }

  render () {
    const { close, notifications } = this.props

    const $notifications = notifications.map(n => (
      <div className={cx('Notifier-notification', n.level)} key={n.id}>
        <div className="message">{n.message}</div>

        <a className="Notifier-close" onClick={() => close(n.id)}>
          <i className="fa fa-times" aria-hidden="true" />
        </a>
      </div>
    ))

    return (
      <div className="Notifier">
        <div className="Notifier-center">{$notifications}</div>
      </div>
    )
  }
}

Notifier.defaultProps = {
  timeout: 50000
}

const mapStateToProps = (state, props) => {
  return {
    notifications: state.notifications
  }
}

export default connect(
  mapStateToProps, {
    close
  }
)(Notifier)