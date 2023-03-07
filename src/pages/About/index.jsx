import React, { Component, Fragment } from 'react'
import AboutDescription from '../../components/AboutDescription'
import PageTop from '../../components/PageTop'

export default class index extends Component {
  render() {
    return (
      <Fragment>
        <PageTop title="ABOUT"/>
        <AboutDescription />
      </Fragment>
    )
  }
}
