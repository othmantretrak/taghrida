import React from "react"
import { Link } from "gatsby"
function Drawer({ nav, closeNav }) {
  const classes = nav ? "drawer nav-active" : "drawer"
  return (
    <nav className={classes}>
      <ul className="navList">
        <li onClick={closeNav}>
          <Link className="navItem" activeClassName="activeNavItem" to="/">
            الرئيسية
          </Link>
        </li>

        <li onClick={closeNav}>
          <a
            href="https://www.facebook.com/ta4rida"
            target="_blank"
            rel="noopener noreferrer"
            className="navItem"
          >
            صفحتنا على فيسبوك
          </a>
        </li>
        <li onClick={closeNav}>
          <Link
            className="navItem"
            activeClassName="activeNavItem"
            to="/contact"
          >
            اتصل بنا
          </Link>
        </li>
        <li onClick={closeNav}>
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
  )
}

export default Drawer
