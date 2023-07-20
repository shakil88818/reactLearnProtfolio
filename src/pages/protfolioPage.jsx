/* eslint-disable no-unused-vars */
import React, { Component } from 'react'
import PageTop from '../components/PageTop/PageTop';
import TopNavigation from '../components/TopNavigation/TopNavigation';
import AllProject from '../components/AllProject/AllProject';
import Footer from '../components/Footer/Footer';

export default class ProtfolioPage extends Component {
  render() {
    return (
      <div>
        <TopNavigation/>
        <PageTop pageTitle = "Protfolio"/>
        <AllProject/>
        <Footer/>
      </div>
    )
  }
}
