module.exports = {
  siteMetadata: {
    title: 'CleanCode.ca - Bane Debeljević',
    url: 'https://cleancode.ca',
    description: "CleanCode.ca - Bane Debeljević's Personal Website",
    author: {
      name: 'Bane Debeljević',
      bio: 'Developer • Architect • Leader',
      contacts: {
        twitter: '',
        linkedin: '',
        github: '',
        codepen: '',
        codesandbox: '',
      },
    },
    disqusShortname: '',
    postsPerPage: 10,
  },
  plugins: [
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'CleanCode.ca - Bane Debeljević',
        short_name: 'CleanCode.ca - Bane Debeljević',
        start_url: '/',
        background_color: '#ffffff',
        theme_color: '#744C9E',
        display: 'standalone',
        icon: 'src/assets/logos/icon.png',
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/`,
        name: 'src',
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/content/`,
        name: 'pages',
      },
    },
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [],
      },
    },
    'gatsby-plugin-root-import',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-offline',
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    'gatsby-plugin-styled-components',
    'gatsby-plugin-netlify-cms',
  ],
};
