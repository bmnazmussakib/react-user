import React, { Component } from 'react'
import Home from '../pages/Home/index'
import About from '../pages/About/index'
import Course from '../pages/Course/index'
import Projects from '../pages/Projects/index'
import Contact from '../pages/Contact/index'
import Service from '../pages/Service/index'
import NotFound from '../pages/NotFound/index'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

export default class Index extends Component {
  render() {
    return (
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/course' element={<Course />} />
        <Route path='/projects' element={<Projects />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/service' element={<Service />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
      </BrowserRouter>
    )
  }
}
