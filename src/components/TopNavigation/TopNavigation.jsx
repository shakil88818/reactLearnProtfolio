/* eslint-disable no-unused-vars */

import React, { Component } from 'react'
import { Container, Nav, Navbar} from 'react-bootstrap'
import WhiteLogo from '../../assets/image/whiteLogo.gif'
import BlackLogo from '../../assets/image/blackLogo.gif'

import '../../assets/css/custom.css';


class TopNavigation extends Component {

  constructor(props) {
    super(props)
  
    this.state = {
       navBarTitle: "navLogoTitle",
       navBarLogo: [WhiteLogo],
       navBarback: "navBg",
       navBarItem: "navItem"
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

    const {navBarTitle, navBarLogo, navBarback,navBarItem} = this.state


    return (
      <>
        <Navbar fixed = "top" collapseOnSelect expand="lg" className={navBarback}>
            <Container>
                    <Navbar.Brand className = {navBarTitle}> <img className = "logoImg" src = {navBarLogo}/>Shakil khan</Navbar.Brand>
                    <Navbar.Toggle className ="toggleColor" aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">

                    </Nav>
                    <Nav>
                        <Nav.Link className = {navBarItem}>Home</Nav.Link>
                        <Nav.Link className = {navBarItem}>Services</Nav.Link>
                        <Nav.Link className = {navBarItem}>Courses</Nav.Link>
                        <Nav.Link className = {navBarItem}>Protfolio</Nav.Link>
                        <Nav.Link className = {navBarItem}>Contact</Nav.Link>
                        <Nav.Link className = {navBarItem}>About</Nav.Link>
                    </Nav>
                    </Navbar.Collapse>
            </Container>
        </Navbar>
      </>
    )
  }
}

export default TopNavigation;

