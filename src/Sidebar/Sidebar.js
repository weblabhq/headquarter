import React, { Component } from 'react';

import './Sidebar.css';

class Sidebar extends Component {
  componentDidMount () {
    this.dd = 1;
  }

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
              <a href="/"
                onMouseOver={(e) => this._showTooltip(e, 'Dashboard')}
                onMouseMove={this._moveTooltip}
                onMouseOut={this._hideTooltip}>
                <i className="fa fa-laptop"></i>
              </a>
            </li>

            <li className="">
              <a href="/monitoring"
                onMouseOver={(e) => this._showTooltip(e, 'Monitoring')}
                onMouseMove={this._moveTooltip}
                onMouseOut={this._hideTooltip}>
                <i className="fa fa-heartbeat"></i>
              </a>
            </li>

            <li className="">
              <a href="/microservices"
                onMouseOver={(e) => this._showTooltip(e, 'Microservices')}
                onMouseMove={this._moveTooltip}
                onMouseOut={this._hideTooltip}>
                <i className="fa fa-tasks"></i>
              </a>
            </li>

            <li className="">
              <a href="/events"
                onMouseOver={(e) => this._showTooltip(e, 'Events')}
                onMouseMove={this._moveTooltip}
                onMouseOut={this._hideTooltip}>
                <i className="fa fa-bolt"></i>
              </a>
            </li>
          </ul>
        </nav>

        <div ref="tooltip" className='Sidebar-tooltip' />
      </div>
    );
  }
}

export default Sidebar;
