import React from 'react';
import { navigate } from 'gatsby';
import Img from 'gatsby-image';
import _ from 'lodash';
import Layout from '../../global/Layout';
import Page from '../Page';
import Pagination from '../Pagination';
import Copyright from '../Copyright';
import { useSiteMetadata, useWindowSize } from '../../hooks';
import {
  StyledTagCloud as TagCloud,
  StyledMeta as Meta,
  ListOfPosts,
  ResponsiveWrapper,
  PostDescriptionWrapper,
  PostDescription,
  PostLink,
} from './style';

const tagCloudColorOptions = {
  luminosity: 'light',
  hue: 'green',
};

const ArticleList = ({ data, pageContext, pageTitle, pageDescription }) => {
  const { title, description } = useSiteMetadata();
  const { prevPagePath, nextPagePath, hasPrevPage, hasNextPage } = pageContext;
  const { edges } = data.allMarkdownRemark;
  const windowSize = useWindowSize();

  return (
    <Layout
      title={pageTitle || title}
      description={pageDescription || description}
    >
      <Page title={pageTitle || title}>
        {data.tags && data.tags.group && (
          <TagCloud
            minSize={windowSize.width > 650 ? 21 : 14}
            maxSize={windowSize.width > 650 ? 42 : 28}
            colorOptions={tagCloudColorOptions}
            tags={data.tags.group}
            className="simple-cloud"
            style={{
              cursor: 'pointer',
            }}
            onClick={(tag) => navigate(`/tag/${_.kebabCase(tag.value)}`)}
          />
        )}
        <ListOfPosts>
          {edges.map((edge) => (
            <ResponsiveWrapper key={edge.node.frontmatter.title}>
              <PostLink to={`/posts/${edge.node.frontmatter.slug}/`}>
                <Img
                  fluid={
                    edge.node.frontmatter.socialImage.childImageSharp.fluid
                  }
                  alt="blah"
                />
                <PostDescriptionWrapper>
                  {`${edge.node.frontmatter.title}`}
                  <Meta node={edge.node} />
                  <PostDescription>
                    {edge.node.frontmatter.description}
                  </PostDescription>
                </PostDescriptionWrapper>
              </PostLink>
            </ResponsiveWrapper>
          ))}
        </ListOfPosts>
        <Pagination
          prevPagePath={prevPagePath}
          nextPagePath={nextPagePath}
          hasPrevPage={hasPrevPage}
          hasNextPage={hasNextPage}
        />
      </Page>
      <Copyright />
    </Layout>
  );
};

export default ArticleList;
