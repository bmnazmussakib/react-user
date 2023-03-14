import axios from 'axios'
import React, { Component } from 'react'
import Analysis from '../../components/Analysis'
import HowWork from '../../components/HowWork'
import OurServices from '../../components/OurServices'
import RecentProjects from '../../components/RecentProjects'
import Services from '../../components/Services'
import Testimonial from '../../components/Testimonial'
import TopBanner from '../../components/TopBanner'
import Video from '../../components/Video'

export default class index extends Component {
  render() {
    return (
      <div>
        <TopBanner />
        <Services />
        <Analysis />
        <HowWork/>
        <RecentProjects />
        <OurServices />
        <Video/>
        <Testimonial/>
      </div>
    )
  }
}
