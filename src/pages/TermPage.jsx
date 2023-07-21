/* eslint-disable no-unused-vars */
import React, { Component } from 'react'
import PageTop from '../components/PageTop/PageTop';
import TopNavigation from '../components/TopNavigation/TopNavigation';

import Footer from '../components/Footer/Footer';
import TermDesc from '../components/TermsDesc/TermDesc';

export default class TermPage extends Component {
  render() {
    return (
      <div>
        <TopNavigation title = "Terms & Conditions" />
        <PageTop pageTitle = "Terms & Conditions"/>
        <TermDesc/>
        <Footer/>
      </div>
    )
  }
}