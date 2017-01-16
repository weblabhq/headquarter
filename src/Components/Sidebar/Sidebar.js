import React, { Component } from 'react'
import { Link } from 'react-router'
import { connect } from 'react-redux'
import cx from 'classnames'

import './Sidebar.css';

import { PAGES } from '../../Actions/page.actions'

class Sidebar extends Component {
  _showTooltip = (event, text) => {
    const el = this.refs.tooltip
    el.innerHTML = text
    el.classList.add('show')
  }

  _hideTooltip = (event, el) => {
    this.refs.tooltip.classList.remove('show')
  }

  _moveTooltip = (event) => {
    const el = this.refs.tooltip
    let maxTop = event.clientY < 72 ? 72 : event.clientY
    maxTop = event.clientY > 192 ? 192 : maxTop
    maxTop -= 12
    el.style.top = maxTop + 'px'
  }

  render() {
    const { selected } = this.props

    return (
      <div>
        <nav className="Sidebar">
          <ul className="Sidebar-nav">
            <li className={cx({ active: selected === PAGES.DASHBOARD })}>
              <Link to="/"
                onMouseOver={(e) => this._showTooltip(e, 'Dashboard')}
                onMouseMove={this._moveTooltip}
                onMouseOut={this._hideTooltip}>
                <i className="fa fa-laptop"></i>
              </Link>
            </li>

            <li className={cx({ active: selected === PAGES.LOGS })}>
              <Link to="/logs"
                onMouseOver={(e) => this._showTooltip(e, 'Logs')}
                onMouseMove={this._moveTooltip}
                onMouseOut={this._hideTooltip}>
                <i className="fa fa-list"></i>
              </Link>
            </li>

            <li className={cx({ active: selected === 'monitoring' })}>
              <Link to="/monitoring"
                onMouseOver={(e) => this._showTooltip(e, 'Monitoring')}
                onMouseMove={this._moveTooltip}
                onMouseOut={this._hideTooltip}>
                <i className="fa fa-heartbeat"></i>
              </Link>
            </li>

            <li className={cx({ active: selected === PAGES.SERVICES })}>
              <Link to="/services"
                onMouseOver={(e) => this._showTooltip(e, 'Services')}
                onMouseMove={this._moveTooltip}
                onMouseOut={this._hideTooltip}>
                <i className="fa fa-tasks"></i>
              </Link>
            </li>

            <li className={cx({ active: selected === 'events' })}>
              <Link href="/events"
                onMouseOver={(e) => this._showTooltip(e, 'Events')}
                onMouseMove={this._moveTooltip}
                onMouseOut={this._hideTooltip}>
                <i className="fa fa-bolt"></i>
              </Link>
            </li>
          </ul>
        </nav>

        <div ref="tooltip" className='Sidebar-tooltip' />
      </div>
    );
  }
}

const mapStateToProps = (state, props) => {
  return {
    selected: state.page.selected
  }
}

export default connect(
  mapStateToProps
)(Sidebar)
