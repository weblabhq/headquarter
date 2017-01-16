import React, { Component } from 'react'
import { connect } from 'react-redux'
import cx from 'classnames'

import './BigLogs.css'

import { containersFetch } from '../../../Actions/container.actions'
import { fetchContainerLogs } from '../../../Actions/logs.actions'

class BigLogs extends Component {
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

  select (container) {
    this.setState(
      { container },
      () => this.start()
    )
  }

  render () {
    const { containers, logs } = this.props

    const $logs = logs[this.state.container]
      ? <pre>{logs[this.state.container]}</pre>
      : <div className="none">Select a container to view it's output</div>

    const $items = Object.keys(containers).map(k => {
      const c = containers[k]

      return (
        <li key={c.Id}
          className={cx({
            active: this.state.container === c.Id,
            green: c.State === 'running',
            gray: c.State === 'exited',
          })}
          onClick={(e) => this.select(c.Id)}
        >
          <div className="name truncate">{c.Microservice}</div>
          <div className="id truncate">{c.Id}</div>
        </li>
      );
    })

    return (
      <div className="BigLogs widget fh">
        <div className="body">
          <h1 className="title">{this.state.container || ' '}</h1>

          <div className="w-2">
            <ul className="menu">{$items}</ul>
          </div>

          <div className="w-10 scrollable">
            {$logs}
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
})(BigLogs)
