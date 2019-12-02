import React from 'react';
import styled from 'styled-components';
import Author from './Author';
import Comments from './Comments';
import Content from './Content';
import Meta from './Meta';
import Tags from './Tags';
import Page from '../Page';

const StyledMeta = styled.p`
  font-size: 12px;
  color: #7f7f7f;
`;

const Post = ({ post }) => {
  const { html } = post;
  const { slug, tags, title } = post.frontmatter;

  return (
    <Page title={title}>
      <StyledMeta>
        <Meta node={post} textColor="#7f7f7f" />
      </StyledMeta>
      <Content body={html} />
      <div>
        {tags && <Tags tags={tags} />}
        <Author />
      </div>
      <div>
        <Comments postSlug={slug} postTitle={post.frontmatter.title} />
      </div>
    </Page>
  );
};

export default Post;
