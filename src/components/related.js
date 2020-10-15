import React from "react"
import { Link } from "gatsby"

const RelatedPost = ({ related }) => (
  <>
    <h3>ربما يعجبك هذا</h3>
    <ul className="list-card">
      {related.map(post => (
        <div key={post.slug} className="card">
          <Link to={`/${post.slug}`}>
            <picture>
              <source
                media="(min-width: 1200px)"
                srcSet={`${post.imgUri}?w=400&fit=fill&fm=webp`}
                type="image/webp"
              />
              <source
                media="(min-width: 992px)"
                srcSet={`${post.imgUri}?w=400&fit=fill&fm=webp`}
                type="image/webp"
              />

              <img
                src={`${post.imgUri}?w=400&fit=fill&fm=webp`}
                alt={post.title}
              />
            </picture>

            <h2>{post.title}</h2>
          </Link>
        </div>
      ))}
    </ul>
  </>
)

export default RelatedPost
