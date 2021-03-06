const path = require(`path`)
const createPaginatedPages = require("gatsby-paginate")
const { createRemoteFileNode } = require("gatsby-source-filesystem")
const { fluid } = require(`gatsby-plugin-sharp`)


module.exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const blogTemplate = path.resolve("./src/templates/blog.js")
  const tagTemplate = path.resolve("./src/templates/tag.js")
  const catTemplate = path.resolve("./src/templates/category.js")
  const res = await graphql(`
    query {
      swapi {
        articles(sort: "desc") {
          id
          author
          tags
          excerpt
          slug
          title
          cat {
            title
          }
          imgUri
          images
        }
      }
    }
  `)

  createPaginatedPages({
    edges: res.data.swapi.articles,
    createPage: createPage,
    pageTemplate: "src/templates/index.js",
    pageLength: 16, // This is optional and defaults to 10 if not used
    pathPrefix: "", // This is optional and defaults to an empty string if not used
    context: {}, // This is optional and defaults to an empty object if not used
  })

  res.data.swapi.articles.forEach(article => {
    const slug = decodeURIComponent(article.slug)
    createPage({
      component: blogTemplate,
      path: `/${slug}`,
      context: {
        id: article.id,
        img: article.imgUri,
        images: article.images,
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
            tag,
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
exports.onCreateNode = async ({
  node,
  actions,
  store,
  cache,
  createNodeId,
  reporter,
}) => {
  const { createNode, deletePage, createPage } = actions

  if (node.internal.type === "SitePage") {
    if (node.context && node.context.img) {
      if (!node.context.modified) {
        let elementorData={}
         elementorData.img= node.context.img 
        if (node.context.images && node.context.images.length > 0) {
          elementorData.images = node.context.images
        }

        if (elementorData) {
          deletePage(node)

          async function downloadImages() {
            console.log("single img",elementorData.img);
            let fileNode = await createRemoteFileNode({
              url: elementorData.img,
              parentNodeId: node.id,
              store,
              cache,
              createNode,
              createNodeId: id => `elementor-images-ru`,
            })
            let generatedImage = await generateImage({
              fileNode,
              cache,
              reporter,
            })
            elementorData.img = generatedImage
            //_________________
            elementorData.imageResults = []
            if (elementorData.images && elementorData.images.length > 0) {
              for (let i = 0; i < elementorData.images.length; i++) {
                console.log("multip img",elementorData.images[i]);
                let fileNode = await createRemoteFileNode({
                  url: elementorData.images[i],
                  parentNodeId: node.id,
                  store,
                  cache,
                  createNode,
                  createNodeId: id => `elementor-images-${i}`,
                })

                let generatedImage = await generateImage({
                  fileNode,
                  cache,
                  reporter,
                })
                
                //elementorData.imageResults.push(generatedImage) 
                elementorData.imageResults[i]=generatedImage
              }
            }

            //______________
          }

          const generateImage = async function({ fileNode, cache, reporter }) {
            if (!fileNode || !fileNode.absolutePath) return

            let fluidResult = await fluid({
              file: fileNode,
              args: {
                withWebp: true,
                maxWidth: 768,
                toFormat: "WEBP",
                tracedSVG: false,
              },
              reporter,
              cache,
            })

            return fluidResult
          }

          await downloadImages().then(fileNode => {
            createPage({
              ...node,
              context: {
                ...node.context,
                modifiedData: elementorData,
                modified: true,
              },
            })
          })
        }
      }
    }
  }
}
