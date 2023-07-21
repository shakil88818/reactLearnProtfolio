/* eslint-disable no-unused-vars */


import React from 'react'
import {BrowserRouter, Route, Routes} from "react-router-dom"
import HomePage from '../pages/HomePage.jsx'
import ServiesPage from '../pages/ServiesPage.jsx'
import CourcesPage from '../pages/CourcesPage.jsx'
import ProtfolioPage from '../pages/ProtfolioPage.jsx'
import ContactPage from '../pages/ContactPage.jsx'
import AboutPage from '../pages/AboutPage.jsx'
import RefundPage from '../pages/RefundPage.jsx'

export default function AppRouter() {
  return (
    <>
      <BrowserRouter>
          <Routes>
              <Route path="/" Component={HomePage} />
              <Route path="/services" Component={ServiesPage} />
              <Route path="/courses" Component={CourcesPage} />
              <Route path="/protfolio" Component={ProtfolioPage} />
              <Route path="/contact" Component={ContactPage} />
              <Route path="/about" Component={AboutPage} />
              <Route path="/refund policy" Component={RefundPage} />
          </Routes>
      </BrowserRouter>
      
    </>
  )
}

