import type { GatsbyConfig } from 'gatsby';

const config: GatsbyConfig = {
  siteMetadata: {
    title: `Pierre Maclot`,
    siteUrl: `https://pierremaclot.dev`
  },
  flags: {
    DEV_SSR: true
  },
  plugins: [
    'gatsby-plugin-image',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        icon: 'static/images/icon.png'
      }
    },
    'gatsby-plugin-sitemap',
    {
      resolve: `gatsby-plugin-theme-ui`,
      options: {
        preset: require('./src/theme')
      }
    },
    'gatsby-plugin-sass',
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp'
  ],
  // More easily incorporate content into your pages through automatic TypeScript type generation and better GraphQL IntelliSense.
  // If you use VSCode you can also use the GraphQL plugin
  // Learn more at: https://gatsby.dev/graphql-typegen
  graphqlTypegen: true,
  trailingSlash: 'never'
};

export default config;
