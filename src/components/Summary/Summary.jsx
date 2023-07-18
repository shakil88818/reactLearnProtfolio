/* eslint-disable no-unused-vars */
import React, { Component } from "react";
import { Container,Row,Col,Card} from 'react-bootstrap';
import { FaCheckCircle } from "react-icons/fa";
import CountUp from 'react-countup';
import VisibilitySensor from "react-visibility-sensor";



class Summary extends Component {
  render() {
    return (
    <>
        <Container fluid = {true} className = "summaryBanner summaryMargin p-0">
            <div className='summaryBannerOverlay'>
                <Container className="text-center">
                    <Row>
                        <Col lg = {8} md = {6} sm = {12}>
                            <Row className="summarySection">
                                <Col>
                                    <h1 className="summaryCount">

                                        <CountUp start={0} end={100}>
                                        {({ countUpRef, start }) => (
                                            <VisibilitySensor onChange = {start}>
                                                <span ref={countUpRef} />
                                            </VisibilitySensor>   
                                        )}
                                        </CountUp>
                                    </h1>

                                    <h4 className="summaryTotal">Total Projects</h4>
                                    <hr className="bottomHr"></hr>
                                </Col>
                                    
                                <Col>
                                    <h1 className="summaryCount">
                                        <CountUp start={0} end={100}>
                                        {({ countUpRef, start }) => (
                                            <VisibilitySensor onChange = {start}>
                                                <span ref={countUpRef} />
                                            </VisibilitySensor>   
                                        )}
                                        </CountUp>
                                    </h1>

                                    <h4 className="summaryTotal">Total Projects</h4>
                                    <hr className="bottomHr text-center"/>
                                </Col>
                            </Row>

                        </Col>

                        <Col lg = {4} md = {6} sm = {12}>
                            <Card className ="summarySection" style={{ width: '18rem' }}>
                                <Card.Body>
                                    <Card.Title className="summaryColHeading">How I work</Card.Title>
                                        <Card.Text>
                                            <div className="summaryColHeading">
                                            <p> <FaCheckCircle /> Lorem ipsum dolor sit.</p>
                                            <p> <FaCheckCircle /> Lorem ipsum dolor sit.</p>
                                            <p> <FaCheckCircle /> Lorem ipsum dolor sit.</p>
                                            <p> <FaCheckCircle /> Lorem ipsum dolor sit.</p>
                                            </div>
                                        </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Container>
                
            </div>
        </Container>
    </>
    
    
    );
  }
}

export default Summary 