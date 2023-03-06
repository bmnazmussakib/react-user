import React, { Component, Fragment } from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

export default class Layout extends Component {
  render() {
    return (
      <Fragment>
        <Navbar />
        <main>{this.props.children}</main>
        <Footer/>
      </Fragment>
    );
  }
}
