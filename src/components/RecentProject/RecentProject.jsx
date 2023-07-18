/* eslint-disable no-unused-vars */
import React, { Component } from "react";
import { Container, Row, Col,Button,Card } from "react-bootstrap";
import RecentProjectImg from '../../assets/image/rp1.png'


class RecentProject extends Component {
  render() {
    return (
        <>
        <Container>
        <h1 className='serviceHeadingTitle text-center'>Recent Project</h1>
            <Row className='text-center'>
                <Col lg = {4} md = {6} sm = {12}>
                    <Card className = "recentProCard">
                        <Card.Img variant="top" src = {RecentProjectImg} />
                        <Card.Body>
                            <Card.Title className="recentProTitle">Card Title</Card.Title>
                            <Card.Text className="recentProDesc">
                            Some quick example text to build on the card title 
                            </Card.Text>
                            <Button variant="primary">Details</Button>
                        </Card.Body>
                    </Card>
                </Col>

                <Col lg = {4} md = {6} sm = {12}>
                    <Card className = "recentProCard">
                        <Card.Img variant="top" src = {RecentProjectImg} />
                        <Card.Body>
                            <Card.Title className="recentProTitle">Card Title</Card.Title>
                            <Card.Text className="recentProDesc">
                            Some quick example text to build on the card title 
                            </Card.Text>
                            <Button variant="primary">Details</Button>
                        </Card.Body>
                    </Card>
                </Col>

                <Col lg = {4} md = {6} sm = {12}>
                    <Card className = "recentProCard">
                        <Card.Img variant="top" src = {RecentProjectImg} />
                        <Card.Body>
                            <Card.Title className="recentProTitle">Card Title</Card.Title>
                            <Card.Text className="recentProDesc">
                            Some quick example text to build on the card title
                            </Card.Text>
                            <Button variant="primary">Details</Button>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>

        </Container>
        </>
    );
  }
}

export default  RecentProject