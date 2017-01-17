import React, { Component } from 'react'
import { connect } from 'react-redux'

import './Pages.css'

import Sidebar from '../Components/Sidebar/Sidebar'
import Navbar from '../Components/Navbar/Navbar'
import MainError from '../Components/Errors/MainError'
import ServerStatus from '../Components/widgets/ServerStatus/ServerStatus'
import RealtimeLogs from '../Components/widgets/RealtimeLogs/RealtimeLogs'
import Containers from '../Components/widgets/Containers/Containers'
import ContainerEvents from '../Components/widgets/ContainerEvents/ContainerEvents'
import Timeline from '../Components/widgets/Timeline/Timeline'

import { setPage, PAGES } from '../Actions/page.actions'

class Dashboard extends Component {
  componentDidMount () {
    this.props.setPage(PAGES.DASHBOARD)
  }

  render() {
    return (
      <div className="Page">
        <MainError />

        <Navbar />

        <Sidebar />

        <div className="Page-content">
          <div className="w-9">
            <div className="w-12">
              <Containers />
            </div>

            <div className="w-12">
              <div className="w-4">
                <ServerStatus size={130} />
              </div>

              <div className="w-8">
                <ContainerEvents />
              </div>
            </div>
          </div>

          <div className="w-3">
            <Timeline />
          </div>

          <div className="w-6">
            <RealtimeLogs />
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state, props) => {
  return {
    user: state.user
  }
}

export default connect(
  mapStateToProps, {
    setPage,
  }
)(Dashboard)
