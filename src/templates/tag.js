import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

export const query = graphql`
  query($tag: String!) {
    allContentfulBlog(filter: { tags: { in: [$tag] } }) {
      edges {
        node {
          title
          slug
          thumb {
            fluid {
              src
            }
          }
          createdAt(formatString: "MMMM Do, YYYY")
        }
      }
    }
  }
`
const Tag = props => {
  console.log("----------------------------", props)
  return (
    <Layout>
      <SEO
        title={props.pageContext.tag}
        keywords={[`${props.pageContext.tag}`, `taghrida`, `تغريدة `]}
      />
      <div className="wrap">
        <h2 className="heading-h2">
          <span className="heading-span">{props.pageContext.tag}</span>
        </h2>
        <div className="card-list">
          {props.data.allContentfulBlog.edges.map(edge => {
            return (
              <div key={edge.node.slug} className="card">
                <Link to={`/blog/${edge.node.slug}`}>
                  <div className="thumb">
                    <img src={edge.node.thumb.fluid.src} alt="ff" />
                  </div>

                  <div className="info">
                    <h4>{edge.node.title}></h4>
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
      </div>
    </Layout>
  )
}

export default Tag
