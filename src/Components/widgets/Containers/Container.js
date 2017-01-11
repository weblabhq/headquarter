import React, { Component } from 'react'

import * as utils from './utils'

class Container extends Component {
  showTooltip (event, tooltip, text) {
    const el = this.refs[tooltip]

    el.style.top = event.clientY - 45 + 'px'
    el.style.left = event.clientX - el.getBoundingClientRect().width / 2 + 'px'
    el.innerHTML = text
    el.classList.add('show')
  }

  hideTooltip (e, tooltip) {
    const el = this.refs[tooltip]

    el.classList.remove('show')
  }

  render () {
    const c = this.props.container
    const stats = this.props.stats

    const stat = {
      cpu: utils.cpuUsage(stats) || 0,
      mem: (utils.memUsage(stats) / utils.memLimit(stats)) || 0.0,
      memBytes: utils.memUsage(stats) || 0
    }

    return (
      <tr key={c.Id} className="container w-12">
        <td className="left w-3">
          <div>{c.Microservice}</div>
          <div className="dimmed">{c.Id}</div>
        </td>
        <td className="center w-7" ref="center">
          <div className="bar blue"
            onMouseOver={(e) => this.showTooltip(e, `tooltip-${c.Id}`, `CPU - ${stat.cpu}%`)}
            onMouseOut={(e) => this.hideTooltip(e, `tooltip-${c.Id}`)}>
            <div className="fill" style={{
              width: ((1 - stat.cpu) * 100) + '%'
            }} />
          </div>

          <div className="bar dark-blue"
            onMouseOver={(e) => this.showTooltip(e, `tooltip-${c.Id}`, `RSS - ${utils.MB(stat.memBytes)}`)}
            onMouseOut={(e) => this.hideTooltip(e, `tooltip-${c.Id}`)}>
            <div className="fill" style={{
              width: ((1 - stat.mem) * 100) + '%'
            }} />
          </div>

          <div ref={`tooltip-${c.Id}`} className='Containers-tooltip' />
        </td>
        <td className="right w-2">
          <div>{c.State}</div>
          <div className="dimmed">{c.Status}</div>
        </td>
      </tr>
    )
  }
}

Container.defaultProps = {
  container: {},
  stats: {}
}

export default Container
