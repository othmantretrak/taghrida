import React from "react"
import stripHtml from "string-strip-html"
import { graphql, Link } from "gatsby"
import { FacebookProvider, Like } from "react-facebook"
//import useScript from "../hooks/useScript"

import Layout from "../components/layout"
import SEO from "../components/seo"
import RelatedPost from "../components/related"
import GoogleAd from "../components/GoogleAd"
import InArticleAd from "../components/inArticleAd"
import Share from "../components/Share"

export const query = graphql`
  query($id: ID!) {
    swapi {
      article(id: $id) {
        title
        tags
        author
        cat {
          title
          articles(limit: 7) {
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
  /*  useScript(
    "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js",
    "head"
  ) */

  const [hide, sethide] = React.useState("none")
  let related = props.data.swapi.article.cat.articles.filter(function(ele) {
    return ele.id !== props.pageContext.id
  })

  return (
    <Layout>
      <SEO
        title={props.data.swapi.article.title}
        keywords={props.data.swapi.article.tags}
        image={props.data.swapi.article.imgUri}
        description={`${stripHtml(props.data.swapi.article.excerpt).substring(
          0,
          160
        )}...`}
      />
      <div className="wrap blog">
        <h1>{props.data.swapi.article.title}</h1>
        <div className="thumb">
          <picture>
            <source
              media="(min-width: 1200px)"
              srcSet={`${props.data.swapi.article.imgUri}?w=800&fit=fill&fm=webp`}
              type="image/webp"
            />
            <source
              media="(min-width: 992px)"
              srcSet={`${props.data.swapi.article.imgUri}?w=600&fit=fill&fm=webp`}
              type="image/webp"
            />

            <img
              src={`${props.data.swapi.article.imgUri}?w=400&fit=fill&fm=webp`}
              alt={props.data.swapi.article.title}
            />
          </picture>
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
          <p
            dangerouslySetInnerHTML={{
              __html: props.data.swapi.article.excerpt,
            }}
          />
          <div className="ads1">
            <GoogleAd />
          </div>
          {/* <div className="ads-more">
            
             <button
              className="btn-hide"
              onClick={() => sethide("block")}
              style={{ display: hide === "block" ? "none" : "block" }}
            >
              أكمل قراءة الموضوع ...
            </button> 
          </div>*/}

          <div
            className="body-post"
            dangerouslySetInnerHTML={{
              __html: props.data.swapi.article.content,
            }}
          />
          <div className="page-fb">
            <FacebookProvider appId="991319730968312" language="ar_AR">
              <Like
                href="https://www.facebook.com/ta4rida"
                colorScheme="light"
                layout="button_count"
                showFaces
                share
              />
            </FacebookProvider>
          </div>
          <div className="ads1">
            <InArticleAd />
          </div>
        </div>
        {/* <div className="ramadan">
          <p className="ramadan-p">
            بمناسبة شهر رمضان الكريم يمكنك إنشاء تهنئة خاصة بك وارسالها إلى
            عائلتك و أصدقائك من هنا :
          </p>
          <a className="ramadan-btn" href="https://www.ta4rida.com/ramadan">
            إنشاء تهنئة خاصة
          </a>
        </div> */}
        <h3>شارك هذه المقالة</h3>
        <Share
          title={props.data.swapi.article.title}
          url={props.location.href}
        />

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
