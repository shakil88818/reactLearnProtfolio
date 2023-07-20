/* eslint-disable no-unused-vars */
import React, { Component } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { FaFacebook, FaYoutube, FaMobileAlt } from "react-icons/fa";
import { MdMarkEmailRead } from "react-icons/md";

export default class Footer extends Component {
  render() {
    return (
      <>
        <Container className='footerMarginTop'>
            <Row>
                <Col lg = {3} md = {6} sm = {12}>
                    <h4 className='footerHeading'>Follow Me</h4>
                    <p className='footerIcon'><FaFacebook/> Facebook</p>
                    <p className='footerIcon'><FaYoutube/> Youtube</p>
                </Col>



                <Col lg = {3} md = {6} sm = {12}>
                    <h4 className='footerHeading'>Address</h4>
                    <p className='footerDesc'>H#504, Hajj camp Mosque Road </p>
                    <p className='footerDesc'>Airport, Ashkona, Dhaka-1230</p>
                    <p className='footerDesc'><MdMarkEmailRead/> shakil88818@gmail.com</p>
                    <p className='footerDesc'><FaMobileAlt/> 01723097069</p>
                </Col>



                <Col lg = {3} md = {6} sm = {12}>
                    <h4 className='footerHeading'>Information</h4>
                    <p className='footerDesc'>About Me</p>
                    <p className='footerDesc'>My Resume</p>
                    <p className='footerDesc'>Contact me</p>
                </Col>



                <Col lg = {3} md = {6} sm = {12}>
                    <h4 className='footerHeading'>Legal</h4>
                    <p className='footerDesc'>Refund Policy</p>
                    <p className='footerDesc'>Terms & Condition</p>
                    <p className='footerDesc'>Privacy Policy</p>
                </Col>

            </Row>
        </Container>


        <Container fluid = {true} className='text-center footerBack'> 
            <p className='copyDesc'>Sk Shakil khan || Copyright 2023</p>
        </Container>
      </>
    )
  }
}
