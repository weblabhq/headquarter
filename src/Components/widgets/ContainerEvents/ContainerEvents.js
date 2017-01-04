import React, { Component } from 'react'

import GraphAPI from '../../../lib/api/graphql'
import Event from './Event'

import './ContainerEvents.css'

class ContainerEvents extends Component {
  constructor(props) {
    super(props)

    this.state = {
      events: []
    }
  }

  componentDidMount () {
    setInterval(() => this.fetch(), 30000)
    this.fetch()
  }

  fetch () {
    GraphAPI(`{
      containerEvents(limit: 20) {
        id
        container
        username
        event
        created
      }
    }`)
    .then(data => {
      this.setState({ events: data.containerEvents })
    })
  }

  render () {
    const $containers = this.state.events.map(c => <Event key={c.id} container={c} />)

    return (
      <div className="ContainerEvents widget">
        <table>
          <thead>
            <tr>
              <th className="w-2">Event</th>
              <th className="w-3">Container</th>
              <th className="w-3">User</th>
              <th className="w-3">Time</th>
            </tr>
          </thead>
        </table>

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

export default ContainerEvents
