/* eslint-disable no-unused-vars */
import React, { Component } from 'react'

import PageTop from '../components/PageTop/PageTop';
import TopNavigation from '../components/TopNavigation/TopNavigation';
import Services from '../components/Services/Services.jsx'
import Footer from '../components/Footer/Footer';


export default class ServiesPage extends Component {
  render() {
    return (
      <div>
        <TopNavigation title = "Service"/>
        <PageTop pageTitle = "Get My Services"/>
        <Services/>
        <Footer/>
      </div>
    )
  }
}
