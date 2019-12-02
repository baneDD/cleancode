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
        path: `${__dirname}/static/media`,
        name: 'media',
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
        plugins: [
          'gatsby-remark-relative-images',
          {
            resolve: 'gatsby-remark-images',
            options: {
              maxWidth: 1500,
            },
          },
          {
            resolve: 'gatsby-remark-responsive-iframe',
            options: {
              wrapperStyle: 'margin-bottom: 1.0725rem',
            },
          },

          'gatsby-remark-prismjs',
          {
            resolve: 'gatsby-remark-copy-linked-files',
            options: {
              destinationDir: `${__dirname}/static`,
            },
          },
          {
            resolve: 'gatsby-remark-copy-linked-files',
            options: {
              destinationDir: `${__dirname}/static`,
            },
          },
          'gatsby-remark-smartypants',
        ],
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
