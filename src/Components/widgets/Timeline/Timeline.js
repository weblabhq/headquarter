import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router'
import moment from 'moment'

import './Timeline.css'

import { containerEventsFetch } from '../../../Actions/container.actions'

class Timeline extends Component {
  componentDidMount () {
    this.props.containerEventsFetch()
  }

  getBadge (type) {
    switch (type) {
      case 'create':
        return <i className="fa fa-plus-circle" />
      case 'remove':
        return <i className="fa fa-minus-circle" />
      case 'stop':
        return <i className="fa fa-stop-circle" />
      case 'start':
        return <i className="fa fa-play-circle" />
      default:
        return null
    }
  }

  getActionVerb (action) {
    const actions = {
      create: 'created',
      remove: 'removed',
      stop: 'stopped',
      start: 'started'
    }

    return actions[action] || ''
  }

  render () {
    const { events } = this.props

    const $events = events.map((e) => {
      const id = e.container.slice(0, 12)
      const created = moment(e.created)
      const when = <span className="when" title={created.format('llll')}>{created.fromNow()}</span>

      return (
        <li className="Timeline-event" key={e.id}>
          <span className="Timeline-event-badge">{this.getBadge(e.event)}</span>
          <div>Container <Link to={`/containers/${id}`}>{id}</Link> {this.getActionVerb(e.event)}</div>
          <div className="info">{when} by {e.username}</div>
        </li>
      )
    });

    return (
      <div className="Timeline widget type2">
        <div className="toolbar">
          <Link to="/events">
            <i className="fa fa-expand" aria-hidden="true"></i>
          </Link>
        </div>

        <h1>Events</h1>

        <div className="scrollable">
          <ul className="Timeline-events">{$events}</ul>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state, props) => {
  return {
    events: state.events
  }
}

export default connect(mapStateToProps, {
  containerEventsFetch
})(Timeline)
