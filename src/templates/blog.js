import React from "react"
import { graphql, Link } from "gatsby"
import {
  FacebookShareButton,
  FacebookIcon,
  TwitterShareButton,
  TwitterIcon,
  WhatsappIcon,
  WhatsappShareButton,
} from "react-share"
import { FacebookProvider, Page } from "react-facebook"

import Layout from "../components/layout"
import SEO from "../components/seo"
import RelatedPost from "../components/related"
import GoogleAd from "../components/GoogleAd"
import InArticleAd from "../components/inArticleAd"

export const query = graphql`
  query($id: ID!) {
    swapi {
      article(id: $id) {
        title
        tags
        author
        cat {
          title
          articles(limit: 4) {
            id
            title
            imgUri
            slug
          }
        }
        excerpt
        imgUri
        content
      }
    }
  }
`

const Blog = props => {
  const [hide, sethide] = React.useState("none")
  const related = props.data.swapi.article.cat.articles.filter(function(ele) {
    return ele.id !== props.pageContext.id
  })
  return (
    <Layout>
      <SEO
        title={props.data.swapi.article.title}
        keywords={props.data.swapi.article.tags}
        image={props.data.swapi.article.imgUri}
      />
      <div className="wrap blog">
        <h1>{props.data.swapi.article.title}</h1>
        <div className="thumb">
          <img
            src={props.data.swapi.article.imgUri}
            alt={props.data.swapi.article.title}
          />
        </div>

        <div className="badgelist">
          <div>
            <span>التصنيف: </span>
            <Link to={`/category/${props.data.swapi.article.cat.title}`}>
              <p className="badge">{props.data.swapi.article.cat.title}</p>
            </Link>
          </div>
          <p className="badge">{props.data.swapi.article.author}</p>
        </div>
        <div className="content">
          <p>{props.data.swapi.article.excerpt}</p>
          <div className="ads-more">
            <div className="ads1">
              <GoogleAd />
            </div>
            {/* <button
              className="btn-hide"
              onClick={() => sethide("block")}
              style={{ display: hide === "block" ? "none" : "block" }}
            >
              أكمل قراءة الموضوع ...
            </button> */}
          </div>

          <div
            className="body-post"
            dangerouslySetInnerHTML={{
              __html: props.data.swapi.article.content,
            }}
          />

          <div className="ads1">
            <InArticleAd />
            <ins
              className="adsbygoogle"
              style={{ display: "block" }}
              data-ad-client="ca-pub-1063328225356164"
              data-ad-slot="5092374925"
              data-ad-format="auto"
              data-full-width-responsive="true"
            ></ins>
          </div>
        </div>
        <h3>شارك هذه المقالة</h3>
        <div className="share">
          <FacebookShareButton
            quote={props.data.swapi.article.title}
            url={props.location.href}
          >
            <FacebookIcon size={32} round={true} />
          </FacebookShareButton>
          <TwitterShareButton
            title={props.data.swapi.article.title}
            url={props.location.href}
          >
            <TwitterIcon size={32} round={true} />
          </TwitterShareButton>
          <WhatsappShareButton
            title={props.data.swapi.article.title}
            url={props.location.href}
          >
            <WhatsappIcon size={32} round={true} />
          </WhatsappShareButton>
        </div>

        <div className="page-fb">
          <span>إنضم إلينا على صفحتنا في الفيسبوك لتشاهد المزيد</span>
          <FacebookProvider appId="991319730968312" language="ar_AR">
            <Page href="https://www.facebook.com/ta4rida" tabs="timeline" />
          </FacebookProvider>
        </div>

        <RelatedPost related={related} />
        {props.data.swapi.article.tags.length > 0 && (
          <>
            <h3>كلمات ذات صلة: </h3>
            <div className="blog-footer">
              <div className="tags">
                {props.data.swapi.article.tags.map(t => (
                  <Link to={`/tag/${t}`} key={t}>
                    <div className="badge">{t}</div>
                  </Link>
                ))}
              </div>
            </div>
          </>
        )}
      </div>
    </Layout>
  )
}

export default Blog
