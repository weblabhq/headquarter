import React, { Component } from 'react'
import { Link } from 'react-router'
import { connect } from 'react-redux'

import './Navbar.css';

import { logout } from '../../Actions/user.actions'

class Sidebar extends Component {
  constructor (props) {
    super(props)

    this.state = {
      showUserMenu: false
    }
  }

  showUserMenu (e) {
    this.setState({ showUserMenu: true })
  }

  hideUserMenu (e) {
    this.setState({ showUserMenu: false })
  }

  onLogout (e) {
    this.props.logout()
  }

  render() {
    const usermenu = this.state.showUserMenu
      ? (
        <ul className="dropdown-menu">
          <li>
            <Link to="/logout" onClick={(e) => this.onLogout(e)}>
              <i className="fa fa-power-off"></i>
              logout
            </Link>
          </li>
        </ul>
      ) : null

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

          <li className="usermenu"
            onMouseLeave={(e) => this.hideUserMenu(e)}
            onMouseOver={(e) => this.showUserMenu(e)}>
            <i className="fa fa-user-circle-o"></i>

            {usermenu}
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
  mapStateToProps, {
    logout
  }
)(Sidebar)
