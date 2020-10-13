import React from "react"
import parse from "html-react-parser"
import Img from "gatsby-image"
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

  const rrr = (imgArr, content) => {
    let arrspli = content.split("img")
    return arrspli.map((e, i) => {
      let u = e.replace("->", "").replace("<-", "")
      return (
        <>
          {parse(u)}
          <Img fluid={imgArr[i]} />
        </>
      )
    })
  }

  const contentModifyed = props.pageContext.modifiedData.images
    ? rrr(
        props.pageContext.modifiedData.images,
        props.data.swapi.article.content
      )
    : parse(props.data.swapi.article.content)

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
          <Img fluid={props.pageContext.modifiedData.img} />
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

          <div className="body-post">{contentModifyed}</div>
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
