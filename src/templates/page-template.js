import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../global/Layout';
import Page from '../components/Page';

const PageTemplate = ({ data }) => {
  const { html: pageBody } = data.markdownRemark;
  const { frontmatter } = data.markdownRemark;
  const { title, description } = frontmatter;

  return (
    <Layout title={title} description={description}>
      <Page title={title}>
        <section dangerouslySetInnerHTML={{ __html: pageBody }} />
      </Page>
    </Layout>
  );
};

export const query = graphql`
  query PageBySlug($slug: String!) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      id
      html
      frontmatter {
        title
        date
        description
        socialImage {
          childImageSharp {
            fluid(maxWidth: 1500) {
              ...GatsbyImageSharpFluid_noBase64
            }
          }
        }
      }
    }
  }
`;

export default PageTemplate;
