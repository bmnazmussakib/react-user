import React, { Component } from 'react'
import { Fragment } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import ContactSection from '../../components/ContactSection'
import PageTop from '../../components/PageTop'
import Services from '../../components/Services'

export default class index extends Component {
  render() {
    return (
      <Fragment>
        <PageTop title="service"/>
        <Services />
        <ContactSection />
      </Fragment>
    )
  }
}
