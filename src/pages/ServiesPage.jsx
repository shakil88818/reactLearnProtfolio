/* eslint-disable no-unused-vars */
import React, { Component } from 'react'

import PageTop from '../components/PageTop/PageTop';
import TopNavigation from '../components/TopNavigation/TopNavigation';
import Services from '../components/Services/Services.jsx'
import Footer from '../components/Footer/Footer';


export default class ServiesPage extends Component {

  componentDidMount(){
    window.scroll(0,0)
  }
  
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
