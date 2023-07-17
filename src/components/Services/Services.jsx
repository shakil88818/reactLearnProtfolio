/* eslint-disable no-unused-vars */
import React, { Component } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import WebLogo from '../../assets/image/web.svg'
import MobileLogo from '../../assets/image/mobile.svg'
import GraphicsLogo from '../../assets/image/graphics.svg'

export default class Services extends Component {
  render() {
    return (
      <>
        <Container>
            <h1 className='serviceHeadingTitle text-center'>My Services</h1>
            <Row>
                <Col lg = {4} md = {6} sm = {12}>
                    <div className = 'serviceCard text-center'>
                        <img src = {WebLogo} className='serviceImage'/>
                        <h2 className = "serviceTitle">Web Development</h2>
                        <p className = "serviceDesc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem officia quibusdam odit, dignissimos quia eveniet. Possimus ullam aliquam minus ab!</p>
                    </div>
                </Col>

                <Col lg = {4} md = {6} sm = {12}>
                    <div className = 'serviceCard text-center'>
                        <img src = {MobileLogo} className='serviceImage'/>
                        <h2 className = "serviceTitle">Mobile Development</h2>
                        <p className = "serviceDesc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem officia quibusdam odit, dignissimos quia eveniet. Possimus ullam aliquam minus ab!</p>
                    </div>
                </Col>

                <Col lg = {4} md = {6} sm = {12}>
                    <div className = 'serviceCard text-center'>
                        <img src = {GraphicsLogo} className='serviceImage'/>
                        <h2 className = "serviceTitle">Graphics Design</h2>
                        <p className = "serviceDesc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem officia quibusdam odit, dignissimos quia eveniet. Possimus ullam aliquam minus ab!</p>
                    </div>
                </Col>
            </Row>
        </Container>
      </>
    )
  }
}

