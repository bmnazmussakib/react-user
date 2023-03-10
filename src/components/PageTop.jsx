import React, { Component, Fragment } from 'react'
import { Button, Col, Container, Row } from 'react-bootstrap'

export default class PageTop extends Component {
  render() {

    console.log(this.props.title)

    return (
        <Fragment>
        <Container fluid className="page-top p-0">
          <Row>
            <Col>
              <div className="page-top-overlay"></div>
              <div className="banner-text">
                <h1>{this.props.title}</h1>
              </div>
            </Col>
          </Row>
        </Container>
      </Fragment>
    )
  }
}
