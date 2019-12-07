import React from 'react';
import { graphql } from 'gatsby';
import ArticleList from '../components/ArticleList';

const TagTemplate = ({ data, pageContext }) => {
  const { tag } = pageContext;
  const pageTitle = `#${tag}`;

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
            categorySlug
          }
          frontmatter {
            slug
            title
            date
            category
            description
            socialImage {
              childImageSharp {
                fluid(maxWidth: 1600) {
                  ...GatsbyImageSharpFluid_withWebp_noBase64
                }
              }
            }
          }
        }
      }
    }
  }
`;

export default TagTemplate;
