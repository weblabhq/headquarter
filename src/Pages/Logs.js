import React, { Component } from 'react'
import { connect } from 'react-redux'

import './Pages.css'

import Sidebar from '../Components/Sidebar/Sidebar'
import Navbar from '../Components/Navbar/Navbar'
import MainError from '../Components/Errors/MainError'
import BigLogs from '../Components/widgets/BigLogs/BigLogs'

import { setPage, PAGES } from '../Actions/page.actions' 

class LogsPage extends Component {
  componentDidMount () {
    this.props.setPage(PAGES.LOGS)
  }

  render() {
    return (
      <div className="Page">
        <MainError />

        <Navbar />

        <Sidebar />

        <div className="Page-content full-height">
          <div className="w-12 fh">
            <BigLogs />
          </div>
        </div>
      </div>
    );
  }
}

export default connect(null, {
  setPage
})(LogsPage)
