import React from "react"
import { graphql, Link } from "gatsby"
import GoogleAd from "../components/GoogleAd"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import {
  FacebookShareButton,
  FacebookIcon,
  TwitterShareButton,
  TwitterIcon,
  WhatsappIcon,
  WhatsappShareButton,
} from "react-share"

import Layout from "../components/layout"
import SEO from "../components/seo"
import RelatedPost from "../components/related"

export const query = graphql`
  query($slug: String!, $category: String!) {
    blog: contentfulBlog(slug: { eq: $slug }) {
      title
      tags
      author
      excerpt
      thumb {
        fluid {
          src
        }
      }
      createdAt(locale: "ar", formatString: "MMMM Do, YYYY")
      body {
        json
      }
    }
    related: allContentfulBlog(filter: { category: { eq: $category } }) {
      edges {
        node {
          slug
          title
          thumb {
            fluid {
              src
            }
          }
        }
      }
    }
  }
`

const Blog = props => {
  const [hide, sethide] = React.useState("none")

  return (
    <Layout>
      <SEO
        title={props.data.blog.title}
        keywords={props.data.blog.tags}
        image={props.data.blog.thumb.fluid.src}
      />
      <div className="wrap blog">
        <h1>{props.data.blog.title}</h1>
        <div className="thumb">
          <img
            src={props.data.blog.thumb.fluid.src}
            alt={props.data.blog.title}
          />
        </div>

        <div className="badgelist">
          <p className="badge">{props.data.blog.createdAt}</p>
          <p className="badge">{props.data.blog.author}</p>
        </div>
        <div className="content">
          <p>{props.data.blog.excerpt}</p>
          <div className="ads-more">
            <div className="ads1">
              <ins
                className="adsbygoogle"
                style={{ display: "block", textAlign: "center" }}
                data-ad-layout="in-article"
                data-ad-format="fluid"
                data-ad-client="ca-pub-1063328225356164"
                data-ad-slot="7150409391"
              />
            </div>
            <button
              className="btn-hide"
              onClick={() => sethide("block")}
              style={{ display: hide === "block" ? "none" : "block" }}
            >
              أكمل قراءة الموضوع ...
            </button>
          </div>

          <div className="body-post" style={{ display: hide }}>
            {documentToReactComponents(props.data.blog.body.json)}
          </div>
          <div className="ads1">
            <ins
              className="adsbygoogle"
              style={{ display: block, textAlign: center }}
              data-ad-layout="in-article"
              data-ad-format="fluid"
              data-ad-client="ca-pub-1063328225356164"
              data-ad-slot="1513756133"
            />
          </div>
        </div>
        <h3>شارك هذه المقالة</h3>
        <div className="share">
          <FacebookShareButton
            quote={props.data.blog.title}
            url={props.location.href}
          >
            <FacebookIcon size={32} round={true} />
          </FacebookShareButton>
          <TwitterShareButton
            title={props.data.blog.title}
            url={props.location.href}
          >
            <TwitterIcon size={32} round={true} />
          </TwitterShareButton>
          <WhatsappShareButton
            title={props.data.blog.title}
            url={props.location.href}
          >
            <WhatsappIcon size={32} round={true} />
          </WhatsappShareButton>
        </div>
        <RelatedPost related={props.data.related} />
        <h3>كلمات ذات صلة: </h3>
        <div className="blog-footer">
          <div className="tags">
            {props.data.blog.tags.map(t => (
              <Link to={`/tag/${t}`} key={t}>
                <div className="badge">{t}</div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Blog
