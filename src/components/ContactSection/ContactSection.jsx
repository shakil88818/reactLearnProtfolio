/* eslint-disable no-unused-vars */
import React, { Component } from 'react'
import { Col,Container,Row,Form,Button } from 'react-bootstrap'

import { FaMobileAlt } from "react-icons/fa";
import { MdMarkEmailRead } from "react-icons/md";



export default class ContactSection extends Component {
  render() {
    return (
      <>
        <Container className='mt-5'>
            <Row>
                <Col lg = {6} md = {6} sm ={12}>

                <h4 className = "serviceTitle">Quick Contact</h4>
                <Form>
                    <Form.Group className="mb-3">
                        <Form.Label className='footerDesc'>Name</Form.Label>
                        <Form.Control type="Text"/>
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Label className='footerDesc'>Email Addres</Form.Label>
                        <Form.Control type="email"/>
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Label className='footerDesc'>Message</Form.Label>
                        <Form.Control as="textarea" rows={3} />
                    </Form.Group>

                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>
                
                </Col>
                


                <Col lg = {6} md = {6} sm ={12}>
                    <h4 className = "serviceTitle">Discuss Now</h4>
                    <p className='footerDesc'>H#504, Hajj camp Mosque Road </p>
                    <p className='footerDesc'>Airport, Ashkona, Dhaka-1230</p>
                    <p className='footerDesc'><MdMarkEmailRead/> shakil88818@gmail.com</p>
                    <p className='footerDesc'><FaMobileAlt/> 01723097069</p>
                </Col>

            </Row>
        </Container>
      </>
    )
  }
}
