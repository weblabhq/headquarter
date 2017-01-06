import React, { Component } from 'react'
import { connect } from 'react-redux'

import { logout } from '../Actions/user.actions'

class Logout extends Component {
  componentDidMount () {
    this.props.logout()
  }

  render () {
    return (
      <div>Logout</div>
    )
  }
}

export default connect(null, {
  logout
})(Logout)
