import React, { Component, Fragment } from 'react'
import PageTop from '../../components/PageTop'
import ProjectDetails from '../../components/ProjectDetails'

export default class index extends Component {
  render() {
    return (
      <Fragment>
        <PageTop title="Project Details"/>
        <ProjectDetails />
      </Fragment>
    )
  }
}
