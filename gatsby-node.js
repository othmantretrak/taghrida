const path = require("path")

module.exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const blogTemplate = path.resolve("./src/templates/blog.js")
  const tagTemplate = path.resolve("./src/templates/tag.js")
  const res = await graphql(`
    query {
      allContentfulBlog {
        edges {
          node {
            slug
            category
          }
        }
      }
    }
  `)

  res.data.allContentfulBlog.edges.forEach(edge => {
    createPage({
      component: blogTemplate,
      path: `/${edge.node.slug}`,
      context: {
        slug: edge.node.slug,
        category: edge.node.category,
      },
    })
  })
  const tag = await graphql(`
    query {
      allContentfulBlog {
        edges {
          node {
            tags
          }
        }
      }
    }
  `)
  tag.data.allContentfulBlog.edges.forEach(edge => {
    edge.node.tags.forEach(tag => {
      createPage({
        component: tagTemplate,
        path: `/tag/${tag}`,
        context: {
          tag: tag,
        },
      })
    })
  })
}
