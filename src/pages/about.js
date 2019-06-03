import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const AboutPage = () => {
  return (
    <Layout>
      <SEO title="من نحن" />
      <h1>من نحن </h1>
      <p>إن لديك المزيد من التساولات المرجو الاتصال بنا .</p>
      <p>
        <Link to="/contact">إتصل بنا .</Link>
      </p>
    </Layout>
  )
}

export default AboutPage
