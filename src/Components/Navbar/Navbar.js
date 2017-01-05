import React, { Component } from 'react'
import { connect } from 'react-redux'

import './Navbar.css';

class Sidebar extends Component {
  render() {
    return (
      <div className="Navbar">
        <a className="Navbar-logo" href="/">W</a>

        <span className="Navbar-title">Dashboard</span>

        <ul className="Navbar-right">
          <li>
            <i className="fa fa-bell-o"></i>
          </li>

          <li>
            <i className="fa fa-cog"></i>
          </li>

          <li>
            <i className="fa fa-user-circle-o"></i>
            <span>{this.props.username}</span>
          </li>
        </ul>
      </div>
    )
  }
}

const mapStateToProps = (state, props) => {
  return {
    username: state.user.username
  }
}

export default connect(
  mapStateToProps
)(Sidebar)
