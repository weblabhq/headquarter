import React, { Component } from 'react'
import { Link } from 'react-router'
import { connect } from 'react-redux'
import cx from 'classnames'

import './Navbar.css';

import { logout } from '../../Actions/user.actions'

class Sidebar extends Component {
  constructor (props) {
    super(props)

    this.state = {
      showUserMenu: false,
      notifications: false,
    }
  }

  toggleUserMenu (e) {
    this.setState({
      showUserMenu: !this.state.showUserMenu,
      notifications: false
    })
  }

  toggleNotifications (e) {
    this.setState({
      showUserMenu: false,
      notifications: !this.state.notifications
    })
  }

  onLogout (e) {
    this.props.logout()
  }

  render() {
    const { page } = this.props

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

        <span className="Navbar-title">{page}</span>

        <ul className="Navbar-right">
          <li onClick={(e) => this.toggleNotifications(e)}>
            <i className="fa fa-bell-o"></i>
          </li>

          <li className="usermenu" onClick={(e) => this.toggleUserMenu(e)}>
            <i className="fa fa-user-circle-o"></i>
            {usermenu}
          </li>
        </ul>

        <div className={cx('notifications', { active: this.state.notifications })}>
          <div className="notifications-wrapper">
            <p>You don't have any notifications right now</p>
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state, props) => {
  return {
    username: state.user.username,
    page: state.page.selected
  }
}

export default connect(
  mapStateToProps, {
    logout
  }
)(Sidebar)
