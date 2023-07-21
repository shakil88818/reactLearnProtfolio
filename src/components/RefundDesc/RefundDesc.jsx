/* eslint-disable no-unused-vars */
import React, { Component } from 'react'
import { Col, Container, Row } from 'react-bootstrap'

export default class RefundDesc extends Component {
  render() {
    return (
      <>
        <Container className = "mt-5">
            <Row>
                <Col lg = {12} md = {12} sm = {12} >
                    <ul className='serviceDesc'>
                        <li className='mb-4'>First 30 days Money Back</li>
                        <li className='mb-4'>Lorem ipsum dolor sit amet consectetur.</li>
                        <li className='mb-4'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Mollitia a molestias consequatur voluptatum eaque modi nostrum corrupti aut sunt, animi minus, illo molestiae at aperiam doloribus iusto quidem velit rerum vitae voluptatibus ipsum nam neque optio. Nemo fugiat libero quos! Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut, dolore asperiores quos assumenda voluptatum molestiae delectus sint aspernatur quas aliquid.</li>
                        <li className='mb-4'>Lorem ipsum dolor sit amet consectetur adipisicing.</li>
                        <li className='mb-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus, impedit.</li>
                        <li className='mb-4'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio facere ab qui obcaecati quis neque repudiandae magni tempore! Laborum, in? Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi quam aliquid nemo!</li>
                    </ul>
                </Col>
            </Row>
        </Container>
      </>
    )
  }
}
