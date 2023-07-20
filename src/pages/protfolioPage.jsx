/* eslint-disable no-unused-vars */
import React, { Component } from 'react'
import PageTop from '../components/PageTop/PageTop';
import TopNavigation from '../components/TopNavigation/TopNavigation';
import AllProject from '../components/AllProject/AllProject';
import Footer from '../components/Footer/Footer';

class ProtfolioPage extends Component {
  render() {
    return (
      <div>
        <TopNavigation title = "Protfolio"/>
        <PageTop pageTitle = "Protfolio"/>
        <AllProject/>
        <Footer/>
      </div>
    )
  }
}
export default ProtfolioPage 