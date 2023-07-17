/* eslint-disable no-unused-vars */
import React from 'react'
import TopBanner from './components/TopBanner/topBanner.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';
import Services from './components/Services/Services.jsx'
import TopNavigation from './components/TopNavigation/TopNavigation.jsx'


const App = () => {
  return (
    <div>
      <TopNavigation />
      <TopBanner />
      <Services />
      

    </div>
  )
}

export default App

