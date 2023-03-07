import React, { Component, Fragment } from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

// eslint-disable-next-line import/no-anonymous-default-export
export default class extends Component {

    constructor(){
        super();
        this.state = {
            navbar: 'navbar-title',
            bg: 'transparent'
        }
    }

    onScroll = () => {
        if (window.scrollY>100) {
            this.setState({navbar: 'navbar-scroll', bg: 'white'})
        }
        else if (window.scrollY<100) {
            this.setState({navbar: 'navbar', bg: 'transparent'})
        }
    }

    componentDidMount(){
        window.addEventListener('scroll', this.onScroll)
    }

  render() {
    return (
      <Fragment>
        <Navbar fixed="top" bg={this.state.bg} variant="dark" className={this.state.navbar}>
          <Container>
            <Navbar.Brand href="#home" className="navbar-title">Navbar</Navbar.Brand>
            <Nav className="ms-auto nav">
              <Nav.Link href="" className="nav-link">Home</Nav.Link>
              <Nav.Link href="" className="nav-link">Services</Nav.Link>
              <Nav.Link href="" className="nav-link">Course</Nav.Link>
              <Nav.Link href="" className="nav-link">Portfolio</Nav.Link>
              <Nav.Link href="" className="nav-link">Contact</Nav.Link>
              <Nav.Link href="" className="nav-link">About</Nav.Link>
            </Nav>
          </Container>
        </Navbar>
      </Fragment>
    );
  }
}
