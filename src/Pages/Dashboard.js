import React, { Component } from 'react'

import Sidebar from '../Components/Sidebar/Sidebar'
import Navbar from '../Components/Navbar/Navbar'
import ServerStatus from '../Components/widgets/ServerStatus/ServerStatus'
import RealtimeLogs from '../Components/widgets/RealtimeLogs/RealtimeLogs'
import Containers from '../Components/widgets/Containers/Containers'
import ContainerEvents from '../Components/widgets/ContainerEvents/ContainerEvents'

class Dashboard extends Component {
  render() {
    return (
      <div className="Dashboard">
        <Navbar />

        <Sidebar />

        <div className="App-content">
          <div className="w-9">
            <Containers />
          </div>

          <div className="w-3">
            <ServerStatus size={130} />
          </div>

          <div className="w-6">
            <ContainerEvents />
          </div>

          <div className="w-6">
            <RealtimeLogs />
          </div>
        </div>
      </div>
    );
  }
}

export default Dashboard
