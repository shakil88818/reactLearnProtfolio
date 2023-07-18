/* eslint-disable no-unused-vars */
import React, { Component } from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import { Bar, BarChart, ResponsiveContainer, Tooltip, XAxis} from 'recharts';


class Analysis extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         data: [
            {Technology: 'HTML', Projects: 95},
            {Technology: 'CSS', Projects: 80},
            {Technology: 'C', Projects: 60},
            {Technology: 'JavaScript', Projects: 70},
            {Technology: 'React', Projects: 50},
            {Technology: 'Bootstrap', Projects: 85},
            {Technology: 'PHP', Projects: 30},
            {Technology: 'Python', Projects: 40}

         ]
      }
    }
    




  render() {

    let blue = "rgba(0, 115, 230, 0.8)"
    return (
      <>
        <Container>
            <h1 className = "serviceHeadingTitle text-center">Tecnology Used</h1>
            <Row>

                <Col lg = {6} md = {12} sm = {12}>
                
                <div style={{ width: '100%', height: 300 }}>
                    <ResponsiveContainer>
                        <BarChart width = {100} height = {300} data = {this.state.data}>
                            <XAxis dataKey = 'Technology' />
                            <Tooltip />
                            <Bar dataKey = "Projects" fill = {blue}>

                            </Bar>
                        </BarChart>
                    </ResponsiveContainer>
                </div>
                    
                
                    

                </Col>


                <Col lg = {6} md = {12} sm = {12}>
                    <p className = 'text-justify desc'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sequi ex repudiandae eligendi maxime provident veniam, esse, rerum numquam nam ullam voluptatibus aspernatur maiores voluptatum odit minima quam impedit ipsum aliquam molestias nisi possimus accusantium cum ea. Fuga vero molestias soluta, quae velit voluptates amet necessitatibus quo. Aspernatur quod perspiciatis, repellat suscipit tenetur fuga accusantium dicta blanditiis, sequi quis corrupti consequatur! Pariatur maiores incidunt amet reiciendis tenetur error sapiente mollitia ipsam ex, numquam et porro quidem dignissimos ad molestias tempore adipisci excepturi praesentium doloribus nemo laborum dolorem. Corrupti quam voluptas neque est quo maxime illum earum doloremque mollitia necessitatibus? Saepe, ratione.</p>
                </Col>


            </Row>
        </Container>
      </>
    )
  }
}


export default Analysis;