import React, { Component, Fragment } from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";

// eslint-disable-next-line import/no-anonymous-default-export
export default class extends Component {

  constructor() {
    super();
    this.state = {
      navbar: 'navbar-title',
      bg: 'transparent'
    }
  }

  onScroll = () => {
    if (window.scrollY > 100) {
      this.setState({ navbar: 'navbar-scroll', bg: 'white' })
    }
    else if (window.scrollY < 100) {
      this.setState({ navbar: 'navbar', bg: 'transparent' })
    }
  }

  componentDidMount() {
    window.addEventListener('scroll', this.onScroll)
  }

  render() {
    return (
      <Fragment>
        {/* <Navbar fixed="top" bg={this.state.bg} variant="dark" className={this.state.navbar}>
          <Container>
            <Navbar.Brand href="#home" className="navbar-title">Navbar</Navbar.Brand>
            <Nav className="ms-auto nav">
              <NavLink to='/' className="nav-link">Home</NavLink>
              <NavLink to='/service' className="nav-link">Services</NavLink>
              <NavLink to='/course' className="nav-link">Course</NavLink>
              <NavLink to='/portfolio' className="nav-link">Portfolio</NavLink>
              <NavLink to='/contact' className="nav-link">Contact</NavLink>
              <NavLink to='/about' className="nav-link">About</NavLink>
            </Nav>
          </Container>
        </Navbar> */}

        <nav className="navbar navbar-expand-lg bg-body-tertiary fixed-top w-100">
          <div className="container-fluid">
            <a className="navbar-brand navbar-title" href="#">Navbar</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <a className="nav-link text-white" href="/">Home</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link text-white" href="/service">Services</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link text-white" href="course">Course</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link text-white" href="/portfolio">Portfolio</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link text-white" href="/contact">Contact</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link text-white" href="/about">About</a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </Fragment>
    );
  }
}
