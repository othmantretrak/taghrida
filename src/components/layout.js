import React from "react"

import Header from "./header"
import Footer from "./footer"
import "../styles/index.scss"
import GoogleAd from "./GoogleAd"
import BannerAd from "./BannerAd"
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
        <GoogleAd />
        {props.children}
      </div>
      <div style={{ maxHeight: "92px !important" }}>
        <div className="adsbanner" style={{ maxHeight: "92px !important" }}>
          <BannerAd />
        </div>
      </div>

      <Footer />
    </div>
  )
}

export default Layout
