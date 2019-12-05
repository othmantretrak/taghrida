const path = require("path")
const createPaginatedPages = require('gatsby-paginate')

module.exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const blogTemplate = path.resolve("./src/templates/blog.js")
  const tagTemplate = path.resolve("./src/templates/tag.js")
  const catTemplate = path.resolve("./src/templates/category.js")
  const res = await graphql(`
  query {
    swapi {
      articles(sort:"desc") {
        id
        author
          tags
          excerpt
          slug
          title
          cat{
            title
          }
          imgUri
      }
    }
  }
`)

  createPaginatedPages({
    edges: res.data.swapi.articles,
    createPage: createPage,
    pageTemplate: 'src/templates/index.js',
    pageLength: 16, // This is optional and defaults to 10 if not used
    pathPrefix: '', // This is optional and defaults to an empty string if not used
    context: {}, // This is optional and defaults to an empty object if not used
  })

  res.data.swapi.articles.forEach(article => {
    const slug = decodeURIComponent(article.slug)
    createPage({
      component: blogTemplate,
      path: `/${slug}`,
      context: {
        id: article.id
      },
    })
  })

  res.data.swapi.articles.forEach(article => {
    if (article.tags.length > 0) {
      article.tags.forEach(tag => {
        createPage({
          component: tagTemplate,
          path: `/tag/${tag}`,
          context: {
            tag
          },
        })
      })
    }

  })

  const categories = await graphql(`
  query {
      swapi {
      cats {
        id
        title
      }
    }
  }
`)
  categories.data.swapi.cats.forEach(cat => {
    createPage({
      component: catTemplate,
      path: `/category/${cat.title}`,
      context: {
        catId: cat.id,
      },
    })
  })
}