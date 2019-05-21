import React from "react"
import { Link } from "gatsby"

const RelatedPost = ({ related }) => (
  <>
    <h3>ربما يعجبك هذا</h3>
    <ul className="list-card">
      {related.edges.map(post => (
        <div key={post.node.slug} className="card">
          <Link to={`/${post.node.slug}`}>
            <img src={post.node.thumb.fluid.src} alt={post.title} />
            <h2>{post.node.title}</h2>
          </Link>
        </div>
      ))}
    </ul>
  </>
)

export default RelatedPost
