/* eslint-disable no-unused-vars */
import React, { Component } from 'react'
import { Container, Row, Col,Button,Card } from "react-bootstrap";
import RecentProjectImg from '../../assets/image/rp1.png'

export default class AllProject extends Component {
  render() {
    return (
        <>
        <Container className='mt-5'>
        
            <Row className='text-center'>
                <Col lg = {4} md = {6} sm = {12}>
                    <Card className = "recentProCard">
                        <Card.Img className = "recentImg" variant="top" src = {RecentProjectImg} />
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
                        <Card.Img className = "recentImg" variant="top" src = {RecentProjectImg} />
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
                        <Card.Img className = "recentImg" variant="top" src = {RecentProjectImg} />
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
                        <Card.Img className = "recentImg" variant="top" src = {RecentProjectImg} />
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
                        <Card.Img className = "recentImg" variant="top" src = {RecentProjectImg} />
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
    )
  }
}
