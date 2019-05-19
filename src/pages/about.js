import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const AboutPage = () => {
  return (
    <Layout>
      <SEO title="About" />
      <h1>About Me</h1>
      <p>I currently teach full-time on Udemy.</p>
      <p>
        <Link to="/contact">Want to work with me? Reach out.</Link>
      </p>
    </Layout>
  )
}

export default AboutPage
