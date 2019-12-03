import React from 'react';
import { Link, navigate } from 'gatsby';
import Img from 'gatsby-image';
import { TagCloud } from 'react-tagcloud';
import styled from 'styled-components';
import _ from 'lodash';
import Meta from '../components/Post/Meta';
import Layout from '../global/Layout';
import Page from '../components/Page';
import Pagination from '../components/Pagination';
import { useSiteMetadata } from '../hooks';

const StyledTagCloud = styled(TagCloud)`
  background-color: black;
  padding: 20px;
  border-radius: 10px;
  text-align: center;

  .simple-cloud .tag-cloud-tag {
    cursor: pointer;
  }
`;

const StyledMeta = styled.p`
  margin: 0px;
  font-size: 12px;
  color: #a9a9a9;
`;

const StyledPostsContainer = styled.ul`
  margin-top: 20px;
`;

const StyledPostWrapper = styled.li`
  position: relative;
  margin-bottom: 20px;

  img {
    border-radius: 10px;
    width: 100%;
  }
`;

const StyledPostDescriptionWrapper = styled.div`
  position: absolute;
  width: 100%;
  bottom: 0px;
  left: 0px;
  padding: 10px;
  background: rgba(0, 0, 0, 0.6);
  border-radius: 0 0 10px 10px;
`;

const StyledPostDescription = styled.p`
  margin: 10px 0 0;
  color: white;
  @media all and (max-width: 650px) {
    display: block;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    position: relative;
    line-height: 1.2;
    overflow: hidden;
    text-overflow: ellipsis;
    padding: 0 !important;
    -webkit-line-clamp: 2;
    height: calc(1em * 1.2 * 2);
  }
`;

const StyledPostLink = styled(Link)`
  color: #76d7c4;
  border-bottom: none;
  font-weight: bold;
  letter-spacing: 2px;
`;

const tagCloudColorOptions = {
  luminosity: 'light',
  hue: 'green',
};

const ArticleList = ({ data, pageContext, pageTitle, pageDescription }) => {
  const { title, description } = useSiteMetadata();

  const { prevPagePath, nextPagePath, hasPrevPage, hasNextPage } = pageContext;

  const { edges } = data.allMarkdownRemark;

  return (
    <Layout
      title={pageTitle || title}
      description={pageDescription || description}
    >
      <Page title={pageTitle || title}>
        {data.tags && data.tags.group && (
          <StyledTagCloud
            minSize={16}
            maxSize={32}
            colorOptions={tagCloudColorOptions}
            tags={data.tags.group}
            className="simple-cloud"
            style={{
              cursor: 'pointer',
            }}
            onClick={(tag) => navigate(`/tag/${_.kebabCase(tag.value)}`)}
          />
        )}
        <StyledPostsContainer>
          {edges.map((edge) => (
            <StyledPostWrapper key={edge.node.frontmatter.title}>
              <StyledPostLink to={`/posts/${edge.node.frontmatter.slug}/`}>
                <Img
                  fluid={
                    edge.node.frontmatter.socialImage.childImageSharp.fluid
                  }
                  alt="blah"
                />
                <StyledPostDescriptionWrapper>
                  {`${edge.node.frontmatter.title}`}
                  <StyledMeta>
                    <Meta node={edge.node} />
                  </StyledMeta>
                  <StyledPostDescription>
                    {edge.node.frontmatter.description}
                  </StyledPostDescription>
                </StyledPostDescriptionWrapper>
              </StyledPostLink>
            </StyledPostWrapper>
          ))}
        </StyledPostsContainer>
        <Pagination
          prevPagePath={prevPagePath}
          nextPagePath={nextPagePath}
          hasPrevPage={hasPrevPage}
          hasNextPage={hasNextPage}
        />
      </Page>
    </Layout>
  );
};

export default ArticleList;
