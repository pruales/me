/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  siteMetadata: {
    title: `Paul Ruales`,
    firstName: `Paul`,
    lastName: `Ruales`,
    description: `My personal landing page where I share my work and thoughts.`,
    author: `Paul Ruales`,
    siteUrl: `https://paulruales.com`,
    social: {
      twitter: `@prminified`,
    },
  },
  plugins: [
    'gatsby-plugin-emotion',
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-mdx`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: 'posts',
        path: `${__dirname}/src/posts`
      }
    },
  ]
}
