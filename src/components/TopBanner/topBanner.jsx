import React, { Component } from 'react';
import { Container,Row,Col,Button} from 'react-bootstrap';


class topBanner extends Component {
  render() {
    return (
      <React.Fragment>
        <Container fluid = {true} className = "topFixedBanner p-0">
            <div className='topBannerOverlay'>
                <Container className = "topContent">
                    <Row>
                        <Col className = "text-center">
                            <h1 className = "topTitle">SOFTWARE ENGINEER</h1>
                            <h4 className = "topSubTitle">Mobile & Web Application</h4>
                            <Button variant="primary">More Info</Button>
                        </Col>
                    </Row>
                </Container>
            </div>
        </Container>
      </React.Fragment>
    )
  }
}

export default topBanner;
