import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

export const query = graphql`
  query($catId: String!) {
    swapi {
      cat(id: $catId) {
        title
        articles(limit: 10) {
          slug
          imgUri
          title
        }
      }
    }
  }
`
const category = props => {
  return (
    <Layout>
      <SEO
        title={props.data.swapi.cat.title}
        keywords={[`${props.data.swapi.cat.title}`, `taghrida`, `تغريدة `]}
      />
      <div className="wrap">
        <h2 className="heading-h2">
          <span className="heading-span">{props.data.swapi.cat.title}</span>
        </h2>
        <div className="card-list">
          {props.data.swapi.cat.articles.map(article => {
            return (
              <div key={article.slug} className="card">
                <Link to={`/${article.slug}`}>
                  <div className="thumb">
                    <picture>
                      <source
                        media="(min-width: 1200px)"
                        srcSet={`${article.imgUri}?w=800&fit=fill&fm=webp`}
                        type="image/webp"
                      />
                      <source
                        media="(min-width: 992px)"
                        srcSet={`${article.imgUri}?w=600&fit=fill&fm=webp`}
                        type="image/webp"
                      />
                      <img
                        src={`${article.imgUri}?w=400&fit=fill&fm=webp`}
                        alt={article.title}
                      />
                    </picture>
                  </div>

                  <div className="info">
                    <h4>{article.title}></h4>
                    <div className="meta">
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

export default category
