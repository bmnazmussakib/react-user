import React, { Component } from 'react'
import { Fragment } from 'react'
import { Col, Container, Row } from 'react-bootstrap'

export default class index extends Component {
  render() {
    return (
      <Fragment>
        <Container>
            <Row>
                <Col>
                    <h1>404 Not Found</h1>
                </Col>
            </Row>
        </Container>
      </Fragment>
    )
  }
}
