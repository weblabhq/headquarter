import React from 'react'
import m from 'moment'

const Event = ({
  container
}) => {
  return <tr className="container w-12">
    <td className="left w-2">
      <div>{container.event}</div>
    </td>
    <td className="left w-3">
      <div className="dimmed">{container.container}</div>
    </td>
    <td className="center w-3">
      {container.username}
    </td>
    <td className="right w-3">
      <div title={container.created}>{m(container.created).fromNow()}</div>
      <div className="dimmed">{container.status}</div>
    </td>
  </tr>
}

export default Event
