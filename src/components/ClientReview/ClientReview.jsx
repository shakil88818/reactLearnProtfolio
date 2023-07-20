/* eslint-disable no-unused-vars */
import React, { Component } from 'react'
import { Col, Container, Row } from 'react-bootstrap'

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import CircleImg from '../../assets/image/sk.jpg'

export default class ClientReview extends Component {
  render() {

    var settings = {
        autoplay:true,
        autoplaySpeed:3000,
        dots: true,
        vertical: true,
        infinite: true,
        speed: 3000,
        slidesToShow: 1,
        slidesToScroll: 1,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              initialSlide: 1
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      };

    return (
        
      <>
        <Container className='text-center'>
            <h1 className='serviceHeadingTitle text-center'>Client says</h1>
            <Slider {...settings}>
                <div>
                    <Row className='text-center justify-content-center'>
                        <Col lg = {6} md ={6} sm = {12}>
                            <img className='circleImg' src={CircleImg} />
                            <h4 className = "serviceTitle">Web Development</h4>
                            <p className = "serviceDesc">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corrupti quod maiores deserunt provident illo ab qui delectus voluptatibus quasi fugit? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facilis reiciendis ducimus eligendi distinctio ex voluptas ullam totam in cupiditate earum!</p>
                        </Col>
                    </Row>
                </div>

                <div>
                    <Row className='text-center justify-content-center'>
                        <Col lg = {6} md ={6} sm = {12}>
                            <img className='circleImg' src={CircleImg} />
                            <h4 className = "serviceTitle">Web Development</h4>
                            <p className = "serviceDesc">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corrupti quod maiores deserunt provident illo ab qui delectus voluptatibus quasi fugit? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facilis reiciendis ducimus eligendi distinctio ex voluptas ullam totam in cupiditate earum!</p>
                        </Col>
                    </Row>
                </div>


                <div>
                    <Row className='text-center justify-content-center'>
                        <Col lg = {6} md ={6} sm = {12}>
                            <img className='circleImg' src={CircleImg} />
                            <h4 className = "serviceTitle">Web Development</h4>
                            <p className = "serviceDesc">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corrupti quod maiores deserunt provident illo ab qui delectus voluptatibus quasi fugit? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facilis reiciendis ducimus eligendi distinctio ex voluptas ullam totam in cupiditate earum!</p>
                        </Col>
                    </Row>
                </div>


                <div>
                    <Row className='text-center justify-content-center'>
                        <Col lg = {6} md ={6} sm = {12}>
                            <img className='circleImg' src={CircleImg} />
                            <h4 className = "serviceTitle">Web Development</h4>
                            <p className = "serviceDesc">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corrupti quod maiores deserunt provident illo ab qui delectus voluptatibus quasi fugit? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facilis reiciendis ducimus eligendi distinctio ex voluptas ullam totam in cupiditate earum!</p>
                        </Col>
                    </Row>
                </div>
            </Slider>

        </Container>
      </>
    )
  }
}
