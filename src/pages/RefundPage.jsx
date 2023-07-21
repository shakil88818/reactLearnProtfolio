/* eslint-disable no-unused-vars */
import React, { Component } from 'react'
import PageTop from '../components/PageTop/PageTop';
import TopNavigation from '../components/TopNavigation/TopNavigation';
import RefundDesc from '../components/RefundDesc/RefundDesc.jsx'
import Footer from '../components/Footer/Footer';

export default class RefundPage extends Component {

    componentDidMount(){
        window.scroll(0,0)
      }
      
  render() {
    return (
      <div>
        <TopNavigation title = "Refund Policy" />
        <PageTop pageTitle = "Refund Policy"/>
        <RefundDesc/>
        <Footer/>
      </div>
    )
  }
}
