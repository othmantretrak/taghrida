require("dotenv").config()
module.exports = {
  siteMetadata: {
    title: `تغريدة `,
    description: `قصص يومية بين يديك.`,
    author: `tretrak`,
    authorUrl: "http://otmantretrak.com",
    siteUrl: `https://www.ta4rida.com`,
  },

  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: `${__dirname}/src/`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,

    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `ta4rida`,
        short_name: `ta4rida`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/icon-512x512.png`, // This path is relative to the root of the site.
      },
    },
    //(process.env.GATSBY_CONCURRENT_DOWNLOAD = 1),
    {
      resolve: "gatsby-source-graphql",
      options: {
        typeName: "SWAPI",
        fieldName: "swapi",
        url: "https://mongo-graph-taghrida.herokuapp.com",
      },
    },
    "gatsby-plugin-sass",
    `gatsby-plugin-sitemap`,
    "gatsby-plugin-robots-txt",
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-140496617-1",
        head: true,
      },
    },
  ],
}
