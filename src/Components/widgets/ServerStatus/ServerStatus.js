import React, { Component } from 'react'
import EasyPieChart from 'easy-pie-chart'
import RestAPI from '../../../lib/api/rest'

import './ServerStatus.css'

class ServerStatus extends Component {
  static defaultProps = {
    value: 0,
    size: 110,
    animate: 1000,
    barColor: '#2196f3',
    // trackColor: '#34363e',
    // scaleColor: '#34363e'
    scaleColor: false
  }

  constructor (props) {
    super(props)

    this.state = {
      active: 0,
      available: 0
    }
  }

  componentDidMount () {
    this.$chart = new EasyPieChart(this.refs.chart, this.props)
    this.fetch()
    this.interval = setInterval(() => this.fetch(), 30000)
  }

  componentWillUnmount () {
    delete this.$chart
    clearInterval(this.interval)
  }

  fetch () {
    return RestAPI.microservices.list()
      .then(containers => {
        const active = containers.filter(c => c.State === 'running').length
        const available = 5 - active

        this.setState({ active, available })
        this.$chart.update(active / 5 * 100)
      })
  }

  render () {
    const percent = this.state.active / 5 * 100

    return (
      <div className='ServerStatus widget'>
        <h1>Containers in use</h1>

        <div className="body">
          <span className='ServerStatus-value'>{percent}%</span>
          <div className="chart" ref='chart' />
          <ul className='legend'>
            <li className="active"><span>Active ({this.state.active})</span></li>
            <li><span>Free ({this.state.available})</span></li>
          </ul>
        </div>
      </div>
    )
  }
}

export default ServerStatus
