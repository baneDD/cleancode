import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../global/Layout';
import Post from '../components/Post';

const PostTemplate = ({ data }) => {
  const { frontmatter } = data.post;
  const { title, description } = frontmatter;

  return (
    <Layout title={title} description={description}>
      <Post post={data.post} />
    </Layout>
  );
};

export const query = graphql`
  query PostBySlug($slug: String!) {
    post: markdownRemark(frontmatter: { slug: { eq: $slug } }) {
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
