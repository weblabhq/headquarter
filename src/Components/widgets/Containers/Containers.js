import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router'
import cx from 'classnames'
import _keys from 'lodash.keys'
import _difference from 'lodash.difference'

import {
  containersFetch,
  containerStatsFetch
} from '../../../Actions/container.actions'
import Container from './Container'

import './Containers.css'

class Containers extends Component {
  componentDidMount () {
    this.interval = setInterval(() => this.fetch(), 30000)
    this.fetch()
  }

  componentWillUnmount () {
    clearInterval(this.interval)
  }

  fetch () {
    return this.props.containersFetch(this.props.username);
  }

  componentWillUpdate (nextProps) {
    const now = _keys(this.props.containers)
    const next = _keys(nextProps.containers)

    this.fetchStats(_difference(next, now))
  }

  fetchStats (containerIds) {
    containerIds.forEach(id => this.props.containerStatsFetch(id))
  }

  getContainerListElements (containers, stats) {
    if (!_keys(containers).length) return null

    return Object.keys(containers).map((k) => {
      const c = containers[k]
      return <Container key={c.Id} container={c} stats={stats[c.Id]} />
    })
  }

  onRefresh (e) {
    e.preventDefault()
    this.fetch()
  }

  render () {
    const { containers, stats } = this.props;
    const $containers = this.getContainerListElements(containers, stats)

    return (
      <div className={cx('Containers widget', { fh: this.props.full })}>
        <div className="toolbar">
          <a href="#" onClick={(e) => this.onRefresh(e) }>
            <i className="fa fa-refresh" aria-hidden="true"></i>
          </a>

          <Link to="/services">
            <i className="fa fa-expand" aria-hidden="true"></i>
          </Link>
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

const mapStateToProps = (state, props) => {
  return {
    containers: state.containers,
    username: state.user.username,
    stats: state.stats,
  }
}

export default connect(
  mapStateToProps, {
    containersFetch,
    containerStatsFetch
  }
)(Containers)
