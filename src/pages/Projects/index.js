import React, { Component } from 'react'
import { Fragment } from 'react'
import PageTop from '../../components/PageTop'
import RecentProjects from '../../components/RecentProjects'

export default class index extends Component {
  render() {
    return (
      <Fragment>
        <PageTop title='projects'/>
        <RecentProjects />
      </Fragment>
    )
  }
}
