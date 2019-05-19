import React from "react"
import { graphql, Link } from "gatsby"
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

export const query = graphql`
  query($slug: String!) {
    contentfulBlog(slug: { eq: $slug }) {
      title
      tags
      author
      thumb {
        fluid {
          src
        }
      }
      createdAt(formatString: "MMMM Do, YYYY")
      body {
        json
      }
    }
  }
`

const Blog = props => (
  <Layout>
    {console.log("------------", props.location.href)}
    <SEO
      title={props.data.contentfulBlog.title}
      keywords={props.data.contentfulBlog.tags}
      image={props.data.contentfulBlog.thumb.fluid.src}
    />
    <div className="wrap blog">
      <h1>{props.data.contentfulBlog.title}</h1>

      <img src={props.data.contentfulBlog.thumb.fluid.src} alt="ff" />
      <div className="badgelist">
        <p className="badge">{props.data.contentfulBlog.createdAt}</p>
        <p className="badge">{props.data.contentfulBlog.author}</p>
      </div>
      <div className="content">
        {documentToReactComponents(props.data.contentfulBlog.body.json)}
      </div>
      <div className="share">
        <FacebookShareButton
          quote={props.data.contentfulBlog.title}
          url={props.location.href}
        >
          <FacebookIcon size={32} round={true} />
        </FacebookShareButton>
        <TwitterShareButton
          title={props.data.contentfulBlog.title}
          url={props.location.href}
        >
          <TwitterIcon size={32} round={true} />
        </TwitterShareButton>
        <WhatsappShareButton
          title={props.data.contentfulBlog.title}
          url={props.location.href}
        >
          <WhatsappIcon size={32} round={true} />
        </WhatsappShareButton>
      </div>
      <div className="blog-footer">
        <h3>كلمات ذات صلة: </h3>
        <div className="tags">
          {props.data.contentfulBlog.tags.map(t => (
            <Link to={`/tag/${t}`} key={t}>
              <div className="badge">{t}</div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  </Layout>
)

export default Blog
