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
  PostTitle,
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
            minSize={windowSize.width > 650 ? 20 : 16}
            maxSize={windowSize.width > 650 ? 40 : 24}
            colorOptions={tagCloudColorOptions}
            tags={data.tags.group}
            className="simple-cloud"
            style={{
              cursor: 'pointer',
              lineHeight: windowSize.width > 650 ? '2.5em' : '1.7em',
              padding: windowSize.width > 650 ? '1em' : '0.5em',
            }}
            onClick={(tag) => navigate(`/tag/${_.kebabCase(tag.value)}`)}
          />
        )}
        <ListOfPosts hasTagCloud={data.tags && data.tags.group}>
          {edges.map((edge) => (
            <ResponsiveWrapper key={edge.node.frontmatter.title}>
              <PostLink to={`/blog/${edge.node.frontmatter.slug}/`}>
                <Img
                  fluid={
                    edge.node.frontmatter.socialImage.childImageSharp.fluid
                  }
                  alt="blah"
                />
                <PostDescriptionWrapper>
                  <PostTitle>{`${edge.node.frontmatter.title}`}</PostTitle>
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
        <Copyright />
      </Page>
    </Layout>
  );
};

export default ArticleList;
