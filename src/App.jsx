/* eslint-disable no-unused-vars */
import React from 'react'
import TopBanner from './components/TopBanner/topBanner.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';
import Services from './components/Services/Services.jsx'
import TopNavigation from './components/TopNavigation/TopNavigation.jsx'
import Analysis from './components/Analysis/Analysis.jsx';
import Summary from './components/Summary/Summary.jsx';
import RecentProject from './components/RecentProject/RecentProject.jsx';
import Cources from './components/Cources/Courcs.jsx';



const App = () => {
  return (
    <div>
      <TopNavigation />
      <TopBanner />
      <Services />
      <Analysis />
      <Summary />
      <RecentProject />
      <Cources/>
      
      

    </div>
  )
}

export default App

