import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const NavLink = props => {
    if (!props.test) {
        return <Link to={props.url}>{props.text}</Link>
    } else {
        return <span>{props.text}</span>
    }
}

const IndexPage = ({ pageContext }) => {
    const { group, index, first, last } = pageContext
    const previousUrl = index - 1 === 1 ? '/' : (index - 1).toString()
    const nextUrl = (index + 1).toString()

    return (
        <Layout>
            <SEO title="الرئيسية" keywords={[`اخبار`, `تغريدة`, `مواضيع`]} />
            <div className="wrap">
                <h2 className="heading-h2">
                    <span className="heading-span">مواضيع</span>
                </h2>
                <div className="card-list">
                    {group.map(edge => {
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
                <div className="paginate">
                    <div className="previousLink">
                        <NavLink test={first} url={previousUrl} text="الصفحة السابقة" />
                    </div>
                    <div className="nextLink">
                        <NavLink test={last} url={nextUrl} text="الصفحة الموالية" />
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default IndexPage
