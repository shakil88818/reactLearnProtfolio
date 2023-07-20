/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { Component } from 'react'
import { Container,Row,Col,Button } from 'react-bootstrap'

export default class PageTop extends Component {
  render() {

    const {pageTitle} = this.props
    
    return (
      <>
        <Container fluid = {true} className = "pageTopBanner p-0">
            <div className='pageTopBannerOverlay'>
                <Container className = "pageTopContent">
                    <Row>
                        <Col className = "text-center">

                            <h4 className = "topSubTitle">{pageTitle}</h4>
                            
                        </Col>
                    </Row>
                </Container>
            </div>
        </Container>
      </>
    )
  }
}
