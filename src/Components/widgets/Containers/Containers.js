import React, { Component } from 'react'
import RestAPI from '../../../lib/api/rest'
import * as utils from './utils'

import './Containers.css'

class Containers extends Component {
  constructor (props) {
    super(props)

    this.state = {
      containers: [],
      stats: {}
    }
  }

  componentDidMount () {
    this.interval = setInterval(() => this.fetch(), 30000)
    this.fetch()
  }

  componentWillUnmount () {
    clearInterval(this.interval)
  }

  fetch () {
    return RestAPI.microservices.list()
      .then(containers => {
        this.setState({ containers })

        containers.forEach((c) => {
          RestAPI.containers.stats(c.Id.slice(0, 12)).then(s => {
            console.log(s)

            const stat = {
              cpu: utils.cpuUsage(s),
              mem: (utils.memUsage(s) / utils.memLimit(s)) || 0.0,
              memBytes: utils.memUsage(s)
            }

            this.setState({
              stats: Object.assign({}, this.state.stats, { [c.Id]: stat })
            })
          })
        })
      })
  }

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
    const $containers = this.state.containers.map((c) => {
      const cpu = this.state.stats[c.Id]
        ? this.state.stats[c.Id].cpu
        : 0

      const mem = this.state.stats[c.Id]
        ? this.state.stats[c.Id].mem
        : 0

      const memBytes = this.state.stats[c.Id]
        ? this.state.stats[c.Id].memBytes
        : 0

      return (<tr key={c.Id} className="container w-12">
        <td className="left w-3">
          <div>{c.Microservice}</div>
          <div className="dimmed">{c.Id.slice(0,12)}</div>
        </td>
        <td className="center w-7" ref="center">
          <div className="bar blue"
            onMouseOver={(e) => this.showTooltip(e, `tooltip-${c.Id}`, `CPU - ${cpu}%`)}
            onMouseOut={(e) => this.hideTooltip(e, `tooltip-${c.Id}`)}>
            <div className="fill" style={{
              width: ((1 - cpu) * 100) + '%'
            }} />
          </div>

          <div className="bar dark-blue"
            onMouseOver={(e) => this.showTooltip(e, `tooltip-${c.Id}`, `RSS - ${utils.MB(memBytes)}`)}
            onMouseOut={(e) => this.hideTooltip(e, `tooltip-${c.Id}`)}>
            <div className="fill" style={{
              width: ((1 - mem) * 100) + '%'
            }} />
          </div>

          <div ref={`tooltip-${c.Id}`} className='Containers-tooltip' />
        </td>
        <td className="right w-2">
          <div>{c.State}</div>
          <div className="dimmed">{c.Status}</div>
        </td>
      </tr>)
    })

    return (
      <div className="Containers widget">
        <div className="toolbar">
          <a href="#" onClick={(e) => e.preventDefault() }>
            <i className="fa fa-refresh" aria-hidden="true"></i>
          </a>

          <a href="/containers" onClick={(e) => e.preventDefault() }>
            <i className="fa fa-expand" aria-hidden="true"></i>
          </a>
        </div>

        <h1>Containers</h1>

        <div className="scrollable">
          <table className="w-12">
            <tbody>
              {$containers}
            </tbody>
          </table>
        </div>
      </div>
    )
  }
}

export default Containers
