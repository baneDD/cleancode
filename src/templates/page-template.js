import React from 'react';
import RehypeReact from 'rehype-react';
import { graphql } from 'gatsby';
import SocialBar from '../components/SocialBar';
import Copyright from '../components/Copyright';
import Layout from '../global/Layout';
import Page from '../components/Page';

const renderAst = new RehypeReact({
  createElement: React.createElement,
  components: { copyright: Copyright, social: SocialBar },
}).Compiler;

const PageTemplate = ({ data }) => {
  const { frontmatter, htmlAst } = data.markdownRemark;
  const { title, description } = frontmatter;

  return (
    <Layout title={title} description={description}>
      <Page title={title}>
        <section>{renderAst(htmlAst)}</section>
      </Page>
    </Layout>
  );
};

export const query = graphql`
  query PageBySlug($slug: String!) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      id
      htmlAst
      frontmatter {
        title
        date
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
`;

export default PageTemplate;
