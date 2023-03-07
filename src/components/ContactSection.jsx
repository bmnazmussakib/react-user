import React, { Component } from 'react'
import { Fragment } from 'react'
import { Col, Container, Row } from 'react-bootstrap'

export default class ContactForm extends Component {
    render() {
        return (
            <Fragment>
                <Container>
                    <Row className='align-items-center'>
                        <Col lg={6} md={12} sm={12}>
                            <div className="contact-section">
                                <h3>Contact Form</h3>
                                <form>
                                    <div class="mb-3">
                                        <label for="exampleInputEmail1" class="form-label">Name</label>
                                        <input type="text" class="form-control" id="name" name='name' />
                                    </div>
                                    <div class="mb-3">
                                        <label for="exampleInputEmail1" class="form-label">Email address</label>
                                        <input type="email" class="form-control" id="email" name='email' />
                                    </div>
                                    <div class="mb-3">
                                        <label for="exampleInputEmail1" class="form-label">Message</label>
                                        <textarea type="text" class="form-control" id="message" name='message' />
                                    </div>
                                    <button type="submit" class="btn btn-primary">Submit</button>
                                </form>
                            </div>
                        </Col>
                        <Col lg={6} md={12} sm={12}>
                            <div className='address'>
                                <h3>Discuss Now</h3>
                                <p>Nikunja, Khilkhet, Dhaka</p>
                                <p>sakib@gamil.com</p>
                                <p>+8801766746291</p>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </Fragment>
        )
    }
}
