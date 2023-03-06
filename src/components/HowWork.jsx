import React, { Component } from "react";
import { Fragment } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import CountUp from "react-countup";
import ReactVisibilitySensor from "react-visibility-sensor";

export default class HowWork extends Component {
  render() {
    return (
      <Fragment>
        <Container fluid className="how-work p-0 section">
          <Row>
            <Col>
              <div className="topBannerOverlay"></div>
            </Col>
          </Row>

          <Row>
            <Col lg={4} md={6} sm={12}>
              <div className="counter">
                <h3>
                  <CountUp start={0} end={100}>
                    {({ countUpRef, start }) => (
                      <ReactVisibilitySensor onChange={start}>
                        <span ref={countUpRef} />
                      </ReactVisibilitySensor>
                    )}
                  </CountUp>
                </h3>
                <p>Total Projects</p>
                <hr className="w-25" />
              </div>
            </Col>
            <Col lg={4} md={6} sm={12}>
              <div className="counter">
                <h3>
                <CountUp start={0} end={100}>
                    {({ countUpRef, start }) => (
                      <ReactVisibilitySensor onChange={start}>
                        <span ref={countUpRef} />
                      </ReactVisibilitySensor>
                    )}
                  </CountUp>
                </h3>
                <p>Total Projects</p>
                <hr className="w-25" />
              </div>
            </Col>
            <Col lg={4} md={6} sm={12}>
              <div className="counter">
                <h3>
                <CountUp start={0} end={100}>
                    {({ countUpRef, start }) => (
                      <ReactVisibilitySensor onChange={start}>
                        <span ref={countUpRef} />
                      </ReactVisibilitySensor>
                    )}
                  </CountUp>
                </h3>
                <p>Total Projects</p>
                <hr className="w-25" />
              </div>
            </Col>
            {/* <Col lg={4} md={12} sm={12}></Col> */}
          </Row>
        </Container>
      </Fragment>
    );
  }
}
