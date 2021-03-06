import React, { Component } from 'react'
import { connect } from 'react-redux'
import cx from 'classnames'

import './RealtimeLogs.css'

import { containersFetch } from '../../../Actions/container.actions'
import { fetchContainerLogs } from '../../../Actions/logs.actions'

class RealtimeLogs extends Component {
  constructor (props) {
    super(props)

    this.state = {
      container: ''
    }
  }

  start () {
    this.stop()
    this.interval = setInterval(() => this.start(), 30000)
    if (this.state.container) {
      this.props.fetchContainerLogs(this.state.container)
    }
  }

  stop () {
    if (this.interval) clearInterval(this.interval)
  }

  componentDidMount () {
    if (!Object.keys(this.props.containers).length) {
      this.props.containersFetch()
    }
  }

  componentWillUnmount () {
    this.stop()
  }

  onChange (event) {
    this
      .setState(
        { container: event.target.value },
        () => this.start()
      )
  }

  render () {
    const { containers, logs } = this.props

    const $logs = logs[this.state.container]
      ? logs[this.state.container]
      : ''
    
    const $options = [<option key="0" value="">Select container</option>]
      .concat(Object.keys(containers).map(k => {
        return <option key={containers[k].Id} value={containers[k].Id}>{containers[k].Id}</option>;
      }));
    const $service = containers[this.state.container]
      ? <span className="dimmed">- {containers[this.state.container].Microservice}</span>
      : null

    return (
      <div className={cx('RealtimeLogs widget', { full: this.props.full })}>
        <select className="containers" onChange={(e) => this.onChange(e)} value={this.state.container}>
          {$options}
        </select>

        <h1>Logs {$service}</h1>

        <div className="body">
          <div className="scrollable">
            <pre ref="container">
              {$logs}
            </pre>
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state, props) => {
  return {
    containers: state.containers,
    logs: state.logs
  }
}

export default connect(mapStateToProps, {
  containersFetch,
  fetchContainerLogs
})(RealtimeLogs)
