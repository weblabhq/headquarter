import React, { Component } from 'react'

import RestAPI from '../../../lib/api/rest'

import './RealtimeLogs.css'

class RealtimeLogs extends Component {
  constructor (props) {
    super(props)

    this.state = {
      logs: '',
      container: ''
    }
  }

  componentDidMount () {
    this.start()
  }

  start () {
    if (this.interval) clearInterval(this.interval)
    this.interval = setInterval(() => this.fetch(), 30000)
    this.fetch()
  }

  fetch () {
    if (!this.state.container) return;

    return RestAPI
      .containers
      .logs(this.state.container)
      .then(logs => this.setState({ logs }))
  }

  componentWillUnmount () {
    clearInterval(this.interval)
  }

  onChange (event) {
    this
      .setState(
        { container: event.target.value },
        () => this.start()
      )
  }

  render () {
    return (
      <div className="RealtimeLogs widget">
        <select className="containers" onChange={(e) => this.onChange(e)} value={this.state.container}>
          <option value="">Select</option>
          <option value="596b875aba0b">recent-activity-1.0.0</option>
          <option value="1c260895c73e">weblab-fb-bot-1.0.0</option>
        </select>

        <h1>Logs</h1>

        <div className="body">
          <pre className="scrollable" ref="container">
            {this.state.logs}
          </pre>
        </div>
      </div>
    )
  }
}

export default RealtimeLogs
