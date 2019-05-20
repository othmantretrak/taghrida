import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"

import Layout from "../components/layout"
import blogStyles from "./blog.module.scss"
import SEO from "../components/seo"

const IndexPage = () => {
  const data = useStaticQuery(graphql`
    query {
      allContentfulBlog(sort: { fields: createdAt, order: DESC }) {
        edges {
          node {
            title
            slug

            thumb {
              fluid {
                src
              }
            }
            createdAt(locale: "ar", formatString: "MMMM Do, YYYY")
          }
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
          {data.allContentfulBlog.edges.map(edge => {
            return (
              <div key={edge.node.slug} className="card">
                <Link to={`/${edge.node.slug}`}>
                  <div className="thumb">
                    <img src={edge.node.thumb.fluid.src} alt="ff" />
                  </div>

                  <div className="info">
                    <h4>{edge.node.title}</h4>
                    <div className="meta">
                      <span>{edge.node.createdAt}</span>
                      <span>المزيد</span>
                    </div>
                  </div>
                </Link>
              </div>
            )
          })}
        </div>
        <ol className={blogStyles.posts} />
      </div>
    </Layout>
  )
}

export default IndexPage
