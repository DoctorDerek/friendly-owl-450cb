require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

const siteMetadata = require("./site-metadata.json")

module.exports = {
  pathPrefix: "/",
  siteMetadata: siteMetadata,
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-source-data`,
    `gatsby-transformer-remark`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pages`,
        path: `${__dirname}/src/pages`,
      },
    },
    {
      resolve: `gatsby-plugin-sass`,
      options: {},
    },
    {
      resolve: `gatsby-remark-page-creator`,
      options: {},
    },
    {
      resolve: `@stackbit/gatsby-plugin-menus`,
      options: {
        sourceUrlPath: `fields.url`,
        pageContextProperty: `menus`,
      },
    },
    {
      resolve: `gatsby-theme-auth0`,
      options: {
        domain: process.env.AUTH0_DOMAIN,
        clientID: process.env.AUTH0_CLIENT_ID,
        redirectUri: process.env.AUTH0_CALLBACK_URL,
        // Optional fields:
        // audience: process.env.AUTH0_AUDIENCE,
        // responseType: process.env.AUTH0_RESPONSE_TYPE,
        // scope: process.env.AUTH0_SCOPE,
        callbackPath: "/auth/callback/",
      },
    },
    `gatsby-plugin-remove-trailing-slashes`,
  ],
}
