/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */

import React, { Component } from 'react'
import { Container, Nav, Navbar} from 'react-bootstrap'
import WhiteLogo from '../../assets/image/whiteLogo.gif'
import BlackLogo from '../../assets/image/blackLogo.gif'

import '../../assets/css/custom.css';

import {NavLink} from 'react-router-dom';

class TopNavigation extends Component {

  constructor(props) {
    super(props)
  
    this.state = {
       navBarTitle: "navLogoTitle",
       navBarLogo: [WhiteLogo],
       navBarback: "navBg",
       navBarItem: "navItem",
       pageTitle: props.title
    }
  }
  
 
  onScroll = () => {
    if(window.scrollY > 100){
      this.setState({
        navBarTitle: 'navLogoTitleScroll', navBarLogo: [BlackLogo], navBarback: "navBgScroll",navBarItem: "navItemScroll"
      })
    }

    else if(window.scrollY < 100){
      this.setState({
        navBarTitle: 'navLogoTitle',navBarLogo: [WhiteLogo], navBarback: "navBg",navBarItem: "navItem"
      })
    }
  }
  
  componentDidMount(){
    window.addEventListener('scroll',this.onScroll)
  }
  

  render() {

    const {navBarTitle, navBarLogo, navBarback,navBarItem,pageTitle} = this.state


    return (

      <>

        <title>{pageTitle}</title>
        <Navbar fixed = "top" collapseOnSelect expand="lg" className={navBarback}>
            <Container>
                    <Navbar.Brand> <img className = "logoImg" src = {navBarLogo}/><NavLink className = {navBarTitle} to="/">Shakil khan</NavLink ></Navbar.Brand>
                    <Navbar.Toggle className ="toggleColor" aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">

                    </Nav>
                    <Nav>
                    <Nav.Link><NavLink className = {navBarItem} to="/">Home</NavLink></Nav.Link>
                    <Nav.Link><NavLink className = {navBarItem} to="/services">Services</NavLink></Nav.Link>
                    <Nav.Link><NavLink className = {navBarItem} to="/courses">Courses</NavLink></Nav.Link>
                    <Nav.Link><NavLink className = {navBarItem} to="/protfolio">Protfolio</NavLink></Nav.Link>
                    <Nav.Link><NavLink className = {navBarItem} to="/contact">Contact</NavLink></Nav.Link>
                    <Nav.Link><NavLink className = {navBarItem} to="/about">About</NavLink></Nav.Link>
                    </Nav>
                    </Navbar.Collapse>
            </Container>
        </Navbar>
      </>
    )
  }
}

export default TopNavigation;

