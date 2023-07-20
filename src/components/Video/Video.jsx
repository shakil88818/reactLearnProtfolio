/* eslint-disable no-unused-vars */
import React, { Component } from "react";
import { Container,Row, Col,Modal, Button} from "react-bootstrap";
import { FaPlayCircle } from "react-icons/fa";



export default class Video extends Component {

  render() {
    return (
        <>
        <Container className = "text-center">
            <Row>
                <Col className= "videoCard" lg={12} md={12} sm={12}>
                    <p className = "videoTitle">How i Do </p>
                    <p className="videoDesc">Lorem ipsum dolor sitLorem ipsum dolor sit amet consectLorem ipsum dolor sit amet consect amet consectetur adipisicing elit. Modi porro perferendis iste deserunt, aspernatur quaerat ullam deleniti suscipit, beatae, itaque nemo reiciendis illo. Sunt iusto dolores ab, ad fugiat non placeat velit, voluptatum nostrum, soluta eum a minima obcaecati error!</p>
                    <p className="videoPlayBtn"><FaPlayCircle/></p>
                </Col>
            </Row>


        </Container>
        </>
    )
  }
}
