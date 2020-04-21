import React from "react"

import Header from "./header"
import Footer from "./footer"
import "../styles/index.scss"
//import layoutStyles from "./layout.module.scss"
//import useScript from "../hooks/useScript"

const Layout = props => {
  /*  useScript(
    "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js",
    "head"
  ) */
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
