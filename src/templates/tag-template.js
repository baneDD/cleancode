import React from 'react';
import { graphql } from 'gatsby';
import ArticleList from './article-list-template';

const TagTemplate = ({ data, pageContext }) => {
  const { tag } = pageContext;
  const pageTitle = `posts tagged "${tag}"`;

  return (
    <ArticleList
      data={data}
      pageContext={pageContext}
      pageTitle={pageTitle}
      pageDescription={pageTitle}
    />
  );
};

export const query = graphql`
  query TagPage($tag: String, $postsLimit: Int!, $postsOffset: Int!) {
    site {
      siteMetadata {
        title
        description
      }
    }
    allMarkdownRemark(
      limit: $postsLimit
      skip: $postsOffset
      filter: {
        frontmatter: {
          tags: { in: [$tag] }
          template: { eq: "post" }
          draft: { ne: true }
        }
      }
      sort: { order: DESC, fields: [frontmatter___date] }
    ) {
      edges {
        node {
          fields {
            slug
            categorySlug
          }
          frontmatter {
            title
            date
            category
            description
            socialImage
          }
        }
      }
    }
  }
`;

export default TagTemplate;
