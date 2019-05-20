import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <div className="notfound">
      <h1>لا توجد هذه الصفحة</h1>
      <h3 to="/">المرجو الرجوع الى</h3>
      <Link to="/">الصفحة الرئيسية</Link>
    </div>
  </Layout>
)

export default NotFoundPage
