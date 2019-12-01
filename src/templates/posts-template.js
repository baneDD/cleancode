import React from 'react';
import { graphql } from 'gatsby';
import ArticleList from './article-list-template';

const PostsTemplate = ({ data, pageContext }) => (
  <ArticleList data={data} pageContext={pageContext} pageTitle="all posts" />
);

export const query = graphql`
  query IndexTemplate($postsLimit: Int!, $postsOffset: Int!) {
    allMarkdownRemark(
      limit: $postsLimit
      skip: $postsOffset
      filter: { frontmatter: { template: { eq: "post" }, draft: { ne: true } } }
      sort: { order: DESC, fields: [frontmatter___date] }
    ) {
      edges {
        node {
          fields {
            slug
            categorySlug
          }
          id
          html
          frontmatter {
            title
            date
            category
            description
            socialImage
            slug
          }
        }
      }
    }
    tags: allMarkdownRemark(
      filter: { frontmatter: { template: { eq: "post" }, draft: { ne: true } } }
    ) {
      group(field: frontmatter___tags) {
        value: fieldValue
        count: totalCount
      }
    }
  }
`;

export default PostsTemplate;
