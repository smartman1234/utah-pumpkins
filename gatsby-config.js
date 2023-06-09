const dotenv = require('dotenv')

if (process.env.NODE_ENV !== 'production') {
  dotenv.config()
}

module.exports = {
  siteMetadata: {
    title: `Utah Pumpkins | Pumpkin Carving Ideas and Inspiration`,
    author: `Cade Kynaston`,
    description: `Utah Pumpkins is a place to show off awesome pumpkin carving ideas and get inspiration for your own halloween fun.`,
    siteUrl: `https://www.utahpumpkins.com`,
    social: {
      twitter: `smartman1234`,
    },
  },
  plugins: [
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-plugin-prefetch-google-fonts`,
      options: {
        fonts: [
          {
            family: `Yeon Sung`,
          },
        ],
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/images`,
        name: `images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: process.env.GOOGLE_ANALYTICS_TRACKING_ID,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Utah Pumpkins`,
        short_name: `Utah Pumpkins`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#11151C`,
        display: `minimal-ui`,
        icon: `src/images/pumpkin-icon.png`,
      },
    },
    `gatsby-plugin-offline`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: `omp67figpd18`,
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
        downloadLocal: true,
      }
    },
  ],
}
