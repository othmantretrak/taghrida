import React from "react"
import { Link } from "gatsby"

const RelatedPost = ({ related }) => (
  <>
    <h3>ربما يعجبك هذا</h3>
    <ul className="list-card">
      {related.map(post => (
        <div key={post.slug} className="card">
          <Link to={`/${post.slug}`}>
            <img src={post.imgUri} alt={post.title} />
            <h2>{post.title}</h2>
          </Link>
        </div>
      ))}
    </ul>
  </>
)

export default RelatedPost
