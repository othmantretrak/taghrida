import React from "react"
import { graphql, useStaticQuery } from "gatsby"

const Footer = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          author
          authorUrl
        }
      }
    }
  `)

  return (
    <footer className="footer">
      <p>موقع تغريدة 2020 ©</p>
      {/* <p className="copyright">
        طور الموقع من طرف{" "}
        <a href={data.site.siteMetadata.authorUrl}>
          {data.site.siteMetadata.author}
        </a>
      </p> */}
    </footer>
  )
}

export default Footer
