/* eslint-disable no-unused-vars */
import React, { Component } from 'react'
import { Col, Container, Row } from 'react-bootstrap'

export default class AboutDescription extends Component {
  render() {
    return (
      <>
        <Container className = "mt-5">
            <Row>
                <Col lg = {12} md = {12} sm = {12}>
                    <h2 className = "serviceTitle">Who I Am</h2>
                    <p className = "serviceDesc">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae, quos ipsa aliquid iste explicabo nisi praesentium impedit accusamus quaerat nemo. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Totam commodi numquam velit ipsam sed, porro nulla iste qui sint itaque nihil? Accusamus asperiores esse, possimus quis necessitatibus in autem molestias sequi tenetur veniam vero, sint provident quidem et ea ducimus.</p>
                </Col>


                <Col lg = {12} md = {12} sm = {12}>
                    <h2 className = "serviceTitle">My Mission</h2>
                    <p className = "serviceDesc">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae, quos ipsa aliquid iste explicabo nisi praesentium impedit accusamus quaerat nemo. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Totam commodi numquam velit ipsam sed, porro nulla iste qui sint itaque nihil? Accusamus asperiores esse, possimus quis necessitatibus in autem molestias sequi tenetur veniam vero, sint provident quidem et ea ducimus.</p>
                </Col>


                <Col lg = {12} md = {12} sm = {12}>
                    <h2 className = "serviceTitle">My Vission</h2>
                    <p className = "serviceDesc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis, expedita. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae, quos ipsa aliquid iste explicabo nisi praesentium impedit accusamus quaerat nemo. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Totam commodi numquam velit ipsam sed, porro nulla iste qui sint itaque nihil? Accusamus asperiores esse, possimus quis necessitatibus in autem molestias sequi tenetur veniam vero, sint provident quidem et ea ducimus.</p>
                </Col>
            </Row>
        </Container>
      </>
    )
  }
}
