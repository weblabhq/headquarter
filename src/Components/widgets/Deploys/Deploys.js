import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router'
import {
  LineChart, Line,
  XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer
} from 'recharts'

import './Deploys.css'

import { containerEventsFetch } from '../../../Actions/container.actions'
import { byDay } from './utils'

class Deploys extends Component {
  componentDidMount () {
    this.props.containerEventsFetch()
  }

  render () {
    return (
      <div className="Deploys widget">
        <h1>Deploys</h1>

        <ResponsiveContainer>
          <LineChart width={100} height={100} margin={{ top: 30, right: 20, left: 5, bottom: 0 }}
            data={this.props.data}>
            <XAxis dataKey="name" stroke="#7E899B" axisLine={false} tickLine={false} />
            <YAxis stroke="#7E899B" axisLine={false} tickLine={false} interval={1} />
            
            <Tooltip />
            <CartesianGrid strokeDasharray="3 3"/>

            <Line dataKey='value'
              stroke='#2196f3'
              strokeWidth={2}
              activeDot={{r: 5}}
              type='monotone'
              isAnimationActive={false}
              />
          </LineChart>
        </ResponsiveContainer>
      </div>
    )
  }
}

const mapStateToProps = (state, props) => {
  return {
    events: state.events,
    data: byDay(state.events, 7)
  }
}

export default connect(mapStateToProps, {
  containerEventsFetch
})(Deploys)
