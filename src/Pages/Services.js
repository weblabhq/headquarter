import React, { Component } from 'react'
import { connect } from 'react-redux'

import './Pages.css'

import Sidebar from '../Components/Sidebar/Sidebar'
import Navbar from '../Components/Navbar/Navbar'
import MainError from '../Components/Errors/MainError'
import Containers from '../Components/widgets/Containers/Containers'

import { setPage, PAGES } from '../Actions/page.actions' 

class ServicesPages extends Component {
  componentDidMount () {
    this.props.setPage(PAGES.SERVICES)
  }

  render() {
    return (
      <div className="Page">
        <MainError />

        <Navbar />

        <Sidebar />

        <div className="Page-content full-height">
          <div className="w-12 fh">
            <Containers full />
          </div>
        </div>
      </div>
    );
  }
}

export default connect(null, {
  setPage
})(ServicesPages)
