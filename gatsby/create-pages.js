/* eslint-disable max-len */
const path = require('path');
const _ = require('lodash');
const createCategoriesPages = require('./pagination/create-categories-pages.js');
const createTagsPages = require('./pagination/create-tags-pages.js');
const createBlogPages = require('./pagination/create-blog-pages.js');

const createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;

  // Index page
  createPage({
    path: '/',
    component: path.resolve('./src/templates/index-template.js'),
  });

  // // Posts list
  createPage({
    path: '/blog',
    component: path.resolve('./src/templates/blog-template.js'),
  });

  // Tags list
  createPage({
    path: '/tags',
    component: path.resolve('./src/templates/tags-list-template.js'),
  });

  // Categories list
  createPage({
    path: '/categories',
    component: path.resolve('./src/templates/categories-list-template.js'),
  });

  // 404
  createPage({
    path: '/404',
    component: path.resolve('./src/templates/not-found-template.js'),
  });

  // Posts and pages from markdown
  const result = await graphql(`
    {
      allMarkdownRemark(filter: { frontmatter: { draft: { ne: true } } }) {
        edges {
          node {
            frontmatter {
              template
            }
            fields {
              slug
            }
          }
        }
      }
    }
  `);

  const { edges } = result.data.allMarkdownRemark;

  _.each(edges, (edge) => {
    if (_.get(edge, 'node.frontmatter.template') === 'page') {
      createPage({
        path: edge.node.fields.slug,
        component: path.resolve('./src/templates/page-template.js'),
        context: {
          slug: edge.node.fields.slug,
        },
      });
    } else if (_.get(edge, 'node.frontmatter.template') === 'post') {
      createPage({
        path: `/blog/${edge.node.fields.slug}`,
        component: path.resolve('./src/templates/post-template.js'),
        context: {
          slug: edge.node.fields.slug,
        },
      });
    }
  });

  // Feeds
  await createTagsPages(graphql, actions);
  await createCategoriesPages(graphql, actions);
  await createBlogPages(graphql, actions);
};

module.exports = createPages;
