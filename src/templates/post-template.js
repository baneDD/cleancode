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
    post: markdownRemark(
      frontmatter: { slug: { eq: $slug } }
      fileAbsolutePath: {}
    ) {
      id
      fileAbsolutePath
      htmlAst
      frontmatter {
        slug
        date
        description
        tags
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
`;

export default PostTemplate;
