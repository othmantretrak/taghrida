import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => {
  const data = useStaticQuery(graphql`
  query {
    swapi {
      articles(limit:10) {
       
          author
          tags
          excerpt
          slug
          title
          cat{
            title
          }
          imgUri
      }
    }
  }
`)

  return (
    <Layout>
      <SEO title="الرئيسية" keywords={[`اخبار`, `تغريدة`, `مواضيع`]} />
      <div className="wrap">
        <h2 className="heading-h2">
          <span className="heading-span">مواضيع</span>
        </h2>
        <div className="card-list">
          {data.swapi.articles.map(edge => {
            return (
              <div key={edge.slug} className="card">
                <Link to={`/${edge.slug}`}>
                  <div className="thumb">
                    <img src={edge.imgUri} alt={edge.title} />

                  </div>

                  <div className="info">
                    <h4>{edge.title}</h4>
                    <div className="meta">
                      <span>{edge.cat.title}</span>
                      <span>المزيد</span>
                    </div>
                  </div>
                </Link>
              </div>
            )
          })}
        </div>
      </div>
    </Layout>
  )
}

export default IndexPage
