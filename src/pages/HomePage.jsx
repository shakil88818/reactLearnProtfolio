/* eslint-disable no-unused-vars */
import React, { Component } from 'react'

import TopBanner from '../components/TopBanner/topBanner.jsx'
import Services from '../components/Services/Services.jsx'
import TopNavigation from '../components/TopNavigation/TopNavigation.jsx'
import Analysis from '../components/Analysis/Analysis.jsx';
import Summary from '../components/Summary/Summary.jsx';
import RecentProject from '../components/RecentProject/RecentProject.jsx';
import Cources from '../components/Cources/Courcs.jsx';
import Video from '../components/Video/Video.jsx';
import ClientReview from '../components/ClientReview/ClientReview.jsx';
import Footer from '../components/Footer/Footer.jsx';

export default class HomePage extends Component {
  render() {
    return (
      <div>
        <TopNavigation title = "Home"/>
        <TopBanner />
        <Services />
        <Analysis />
        <Summary />
        <RecentProject />
        <Cources/>
        <Video />
        <ClientReview />
        <Footer/>
      </div>
    )
  }
}

