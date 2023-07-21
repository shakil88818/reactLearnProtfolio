/* eslint-disable no-unused-vars */
import React, { Component } from 'react'
import PageTop from '../components/PageTop/PageTop';
import TopNavigation from '../components/TopNavigation/TopNavigation';
import ContactSection from '../components/ContactSection/ContactSection.jsx'
import Footer from '../components/Footer/Footer';

export default class ContactPage extends Component {

  componentDidMount(){
    window.scroll(0,0)
  }

  render() {
    return (
      <div>
        <TopNavigation title = "Contact"/>
        <PageTop pageTitle = "Contact Me"/>
        <ContactSection/>
        <Footer/>
      </div>
    )
  }
}
