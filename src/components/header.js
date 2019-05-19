import React from "react"
import { Link } from "gatsby"

import logo from "../images/logo.png"
//import headerStyles from "./header.module.scss"

const Header = () => {
  const [nav, setNav] = React.useState(false)

  const openNav = () => {
    setNav(!nav)
  }
  return (
    <header className="header">
      <div className="logo">
        <Link className="title" to="/">
          <img src={logo} alt="taghrida logo" />
        </Link>
      </div>

      <nav>
        <ul className={nav ? "navList nav-active" : "navList"}>
          <li onClick={openNav}>
            <Link className="navItem" activeClassName="activeNavItem" to="/">
              الرئيسية
            </Link>
          </li>

          <li onClick={openNav}>
            <a
              href="https://www.facebook.com/ta4rida"
              target="_blank"
              rel="noopener noreferrer"
              className="navItem"
            >
              صفحتنا على فيسبوك
            </a>
          </li>
          <li onClick={openNav}>
            <Link
              className="navItem"
              activeClassName="activeNavItem"
              to="/contact"
            >
              اتصل بنا
            </Link>
          </li>
          <li onClick={openNav}>
            <Link
              className="navItem"
              activeClassName="activeNavItem"
              to="/privacy"
            >
              الخصوصية
            </Link>
          </li>
        </ul>
      </nav>
      <div onClick={openNav} className={nav ? "bars toggle" : "bars"}>
        <div className="line1" />
        <div className="line2" />
        <div className="line3" />
      </div>
    </header>
  )
}

export default Header
