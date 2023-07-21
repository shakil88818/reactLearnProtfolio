/* eslint-disable no-unused-vars */
import React, { Component } from 'react'
import PageTop from '../components/PageTop/PageTop';
import TopNavigation from '../components/TopNavigation/TopNavigation';
import AboutDescription from '../components/AboutDescription/AboutDescription';
import Footer from '../components/Footer/Footer';

export default class AboutPage extends Component {

  componentDidMount(){
    window.scroll(0,0)
  }

  render() {
    return (
      <div>
            <TopNavigation title = "About"/>
            <PageTop pageTitle = "About Me"/>
            <AboutDescription/>
            <Footer/>

      </div>
    )
  }
}
