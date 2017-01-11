import React, { Component } from 'react';
import { Link } from 'react-router';

import './Sidebar.css';

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
    return (
      <div>
        <nav className="Sidebar">
          <ul className="Sidebar-nav">
            <li className="active">
              <Link to="/"
                onMouseOver={(e) => this._showTooltip(e, 'Dashboard')}
                onMouseMove={this._moveTooltip}
                onMouseOut={this._hideTooltip}>
                <i className="fa fa-laptop"></i>
              </Link>
            </li>

            <li className="">
              <Link to="/monitoring"
                onMouseOver={(e) => this._showTooltip(e, 'Monitoring')}
                onMouseMove={this._moveTooltip}
                onMouseOut={this._hideTooltip}>
                <i className="fa fa-heartbeat"></i>
              </Link>
            </li>

            <li className="">
              <Link to="/microservices"
                onMouseOver={(e) => this._showTooltip(e, 'Microservices')}
                onMouseMove={this._moveTooltip}
                onMouseOut={this._hideTooltip}>
                <i className="fa fa-tasks"></i>
              </Link>
            </li>

            <li className="">
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

export default Sidebar;
