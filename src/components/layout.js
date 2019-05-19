import React from "react"

import Header from "./header"
import Footer from "./footer"
import "../styles/index.scss"
//import layoutStyles from "./layout.module.scss"

const Layout = props => {
  return (
    <div className="main">
      <div className="container">
        <Header />
        {props.children}
      </div>
      <Footer />
    </div>
  )
}

export default Layout
