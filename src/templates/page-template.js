import React from 'react';
import { graphql } from 'gatsby';
import styled from 'styled-components';
import Layout from '../global/Layout';
import Navigation from '../components/Navigation';
import Page from '../components/Page';

const PageTemplate = ({ data }) => {
  const { html: pageBody } = data.markdownRemark;
  const { frontmatter } = data.markdownRemark;
  const { title, description } = frontmatter;

  const Container = styled.div`
    margin: 50px 100px;

    @media all and (max-width: 650px) {
      margin: 70px 20px;
    }
  }`;

  const InnerHtml = styled.section``;

  return (
    <Layout title={title} description={description}>
      <Navigation />
      <Container>
        <Page title={title}>
          <InnerHtml dangerouslySetInnerHTML={{ __html: pageBody }} />
        </Page>
      </Container>
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
        socialImage
      }
    }
  }
`;

export default PageTemplate;
