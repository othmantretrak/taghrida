import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

export const query = graphql`
query($catId: String!) {
    swapi{
        cat(id:$catId){
            title
            articles(limit:10){
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
                                        <img src={article.imgUri} alt="ff" />
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
