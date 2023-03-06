import React, { Component, Fragment } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { FaFacebookSquare, FaLinkedin } from "react-icons/fa";

export default class Footer extends Component {
  render() {
    return (
      <Fragment>
        <footer className="footer">
          <div className="footer-top">
            <Container>
              <Row>
                <Col lg={3} md={3} sm={12}>
                  <div className="footer-widgets">
                    <h4 className="footer-widgets-title card-title">
                      Follow Me
                    </h4>
                    <ul className="">
                      <li>
                        <FaFacebookSquare /> Facebook
                      </li>
                      <li>
                        <FaLinkedin /> Linkedin
                      </li>
                    </ul>
                  </div>
                </Col>
                <Col lg={3} md={3} sm={12}>
                  <div className="footer-widgets">
                    <h4 className="footer-widgets-title card-title">Address</h4>
                    <ul className="">
                      <li>Nikunja, Khilkhet, Dhaka</li>
                      <li>sakib@gamil.com</li>
                      <li>+8801766746291</li>
                    </ul>
                  </div>
                </Col>
                <Col lg={3} md={3} sm={12}>
                  <div className="footer-widgets">
                    <h4 className="footer-widgets-title card-title">
                      Information
                    </h4>
                    <ul className="">
                      <li>About me</li>
                      <li>Contact me</li>
                      <li>About me</li>
                      <li>Contact me</li>
                    </ul>
                  </div>
                </Col>
                <Col lg={3} md={3} sm={12}>
                  <div className="footer-widgets">
                    <h4 className="footer-widgets-title card-title">Legal</h4>
                    <ul className="">
                      <li>Refund Policy</li>
                      <li>Refund Policy</li>
                      <li>Refund Policy</li>
                      <li>Refund Policy</li>
                    </ul>
                  </div>
                </Col>
              </Row>
            </Container>
          </div>

          <Container fluid className=" p-0">
            <Row>
              <Col>
                <div className="copyright text-center">
                  Copyright by <a href="#">B. M. Nazmus Sakib</a>
                </div>
              </Col>
            </Row>
          </Container>
        </footer>
      </Fragment>
    );
  }
}
