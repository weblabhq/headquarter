import React, { Component } from 'react'
import EasyPieChart from 'easy-pie-chart'
import { connect } from 'react-redux'

import './ServerStatus.css'

class ServerStatus extends Component {
  componentDidMount () {
    this.$chart = new EasyPieChart(this.refs.chart, {
      value: 0,
      size: 110,
      animate: 1000,
      barColor: '#2196f3',
      scaleColor: false
    })
  }

  componentWillUnmount () {
    delete this.$chart
  }

  render () {
    const { containers } = this.props
    const active = containers.filter(c => c.State === 'running').length
    const available = 5 - active
    const percent = active / 5 * 100

    if (this.$chart) this.$chart.update(percent);

    return (
      <div className='ServerStatus widget'>
        <h1>Containers in use</h1>

        <div className="body">
          <div className='ServerStatus-value'>{percent}%</div>
          <div className="chart" ref='chart' />
          <ul className='legend'>
            <li className="active"><span>Active ({active})</span></li>
            <li><span>Free ({available})</span></li>
          </ul>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state, props) => {
  return {
    containers: Object.keys(state.containers).map(k => state.containers[k])
  }
}

export default connect(mapStateToProps)(ServerStatus)
