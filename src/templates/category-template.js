import React from 'react';
import { graphql } from 'gatsby';
import ArticleList from './article-list-template';

const CategoryTemplate = ({ data, pageContext }) => {
  const { category } = pageContext;
  const pageTitle = `posts on "${category}"`;

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
  query CategoryPage($category: String, $postsLimit: Int!, $postsOffset: Int!) {
    allMarkdownRemark(
      limit: $postsLimit
      skip: $postsOffset
      filter: {
        frontmatter: {
          category: { eq: $category }
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
            date
            description
            category
            title
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

export default CategoryTemplate;
