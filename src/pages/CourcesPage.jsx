/* eslint-disable no-unused-vars */
import React, { Component } from 'react'
import PageTop from '../components/PageTop/PageTop';
import TopNavigation from '../components/TopNavigation/TopNavigation';
import AllCourcess from '../components/AllCources/AllCourcess.jsx'
import Footer from '../components/Footer/Footer';

export default class CourcesPage extends Component {
  render() {
    return (
      <div>
        <TopNavigation/>
        <PageTop pageTitle = "All Cources"/>
        <AllCourcess/>
        <Footer/>
      </div>
    )
  }
}

