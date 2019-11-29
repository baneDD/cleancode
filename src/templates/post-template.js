import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../global/Layout';
import Post from '../components/Post';
import Navigation from '../components/Navigation';

const PostTemplate = ({ data }) => {
  const { frontmatter } = data.markdownRemark;
  const { title, description } = frontmatter;

  return (
    <Layout title={title} description={description}>
      <Navigation />
      <Post post={data.markdownRemark} />
    </Layout>
  );
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
