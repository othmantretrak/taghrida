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
      resolve: `@isamrish/gatsby-plugin-google-adsense`,
      options: {
        googleAdClientId: "ca-pub-1063328225356164",
        head: false, // Optional
      },
    },
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
    {
      resolve: "gatsby-source-graphql",
      options: {
        // Arbitrary name for the remote schema Query type
        typeName: "SWAPI",
        // Field under which the remote schema will be accessible. You'll use this in your Gatsby query
        fieldName: "swapi",
        // Url to query from
        url: "https://mongo-graph-taghrida.herokuapp.com",
      },
    },
    "gatsby-plugin-sass",
    "gatsby-plugin-sharp",
    `gatsby-plugin-sitemap`,
    "gatsby-plugin-robots-txt",
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-140496617-1",
        // Defines where to place the tracking script - `true` in the head and `false` in the body
        head: true,
      },
    },

    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
