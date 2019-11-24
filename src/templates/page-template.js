import React from 'react';
import { graphql } from 'gatsby';
import styled from 'styled-components';
import Layout from '../global/Layout';
import Navigation from '../components/Navigation';
import Page from '../components/Page';

const PageTemplate = ({ data }) => {
  //   const { title: siteTitle, subtitle: siteSubtitle } = useSiteMetadata();
  const { html: pageBody } = data.markdownRemark;
  const { frontmatter } = data.markdownRemark;
  const {
    title: pageTitle,
    // description: pageDescription,
    // socialImage,
  } = frontmatter;
  //   const metaDescription =    pageDescription !== null ? pageDescription : siteSubtitle;

  /* <Layout
      title={`${pageTitle} - ${siteTitle}`}
      description={metaDescription}
      socialImage={socialImage}
    > */

  const Container = styled.div`
    margin: 50px 200px;

    @media all and (max-width: 650px) {
      margin: 70px 20px;
    }

    h1 {
      font-size: 20px;
      color: #333;
    }

    h2 {
      font-size: 16px;
      color: #333;
      text-transform: uppercase;
      margin-top: 30px;
    }

    ul {
      margin-top: 30px;

      li {
        line-height: 24px;

        a {
          color: #000;
          text-decoration: underline;
        }
      }
    }

    p {
      margin-top: 30px;
      font-size: 14px;
      color: #666;

      a {
        color: #000;
        text-decoration: underline;
      }
    }
  `;

  const InnerHtml = styled.section``;

  return (
    <Layout>
      <Navigation />
      <Container>
        <Page title={pageTitle}>
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
