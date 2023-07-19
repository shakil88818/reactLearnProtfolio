/* eslint-disable no-unused-vars */
import React, { Component } from "react";
import { Container,Row, Col } from "react-bootstrap";
import OurCourcesImg from '../../assets/image/oc1.png'

class Cources extends Component {
  render() {
    return (
        <>
        <Container>
        <h1 className='serviceHeadingTitle text-center'>Our Cources</h1>
            <Row>
                <Col lg = {6} md = {12} sm = {12}>
                  <Row className="courcesMargin">
                    <Col lg = {6} md = {6} sm = {12}>
                      <img className="courcesImg" src = {OurCourcesImg}/>

                    </Col>

                    <Col lg = {6} md = {6} sm = {12}>
                      <h3 className="courcesTitle">Web Development</h3>
                      <p className=".courcesDesc">adipisicing elit. Mollitia iusto harum odio dolore unde quam ullam asperiores architecto doloremque distinctio?</p>
                      <a className = "courcesDetails" href="#">Details</a>
                    </Col>
                  </Row>

                </Col>



                <Col lg = {6} md = {12} sm = {12}>
                  <Row className="courcesMargin">
                    <Col lg = {6} md = {6} sm = {12}>
                    <img className="courcesImg" src = {OurCourcesImg}/>

                    </Col>
              
                    <Col lg = {6} md = {6} sm = {12}>
                        <h3 className="courcesTitle">Web Development</h3>
                        <p className=".courcesDesc">adipisicing elit. Mollitia iusto harum odio dolore unde quam ullam asperiores architecto doloremque distinctio?</p>
                        <a className = "courcesDetails" href="#">Details</a>
                    </Col>
                  </Row>

                </Col>
            </Row>


            <Row>
                <Col lg = {6} md = {12} sm = {12}>
                  <Row className="courcesMargin">
                    <Col lg = {6} md = {6} sm = {12}>
                      <img className="courcesImg" src = {OurCourcesImg}/>

                    </Col>

                    <Col lg = {6} md = {6} sm = {12}>
                      <h3 className="courcesTitle">Web Development</h3>
                      <p className=".courcesDesc">adipisicing elit. Mollitia iusto harum odio dolore unde quam ullam asperiores architecto doloremque distinctio?</p>
                      <a className = "courcesDetails" href="#">Details</a>
                    </Col>
                  </Row>

                </Col>



                <Col lg = {6} md = {12} sm = {12}>
                  <Row className="courcesMargin">
                    <Col lg = {6} md = {6} sm = {12}>
                    <img className="courcesImg" src = {OurCourcesImg}/>

                    </Col>
              
                    <Col lg = {6} md = {6} sm = {12}>
                      <h3 className="courcesTitle">Web Development</h3>
                      <p className=".courcesDesc">adipisicing elit. Mollitia iusto harum odio dolore unde quam ullam asperiores architecto doloremque distinctio?</p>
                      <a className = "courcesDetails" href="#">Details</a>
                    </Col>
                  </Row>

                </Col>
            </Row>
        </Container>
        </>
    )
  }
}

export default Cources
