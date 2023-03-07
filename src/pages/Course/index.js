import React, { Component } from 'react'
import { Fragment } from 'react'
import OurServices from '../../components/OurServices'
import PageTop from '../../components/PageTop'

export default class index extends Component {
  render() {
    return (
      <Fragment>
        <PageTop title="COURSE"/>
        <OurServices />
      </Fragment>
    )
  }
}
