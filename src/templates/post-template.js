import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../global/Layout';

const PostTemplate = ({ data }) => {
  const { frontmatter } = data.markdownRemark;
  const {
    title: postTitle,
    description: postDescription,
    socialImage,
  } = frontmatter;

  return <Layout />;
};

export const query = graphql`
  query PostBySlug($slug: String!) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      id
      html
      frontmatter {
        slug
        date
        description
        tags
        title
        socialImage
      }
    }
  }
`;

export default PostTemplate;
