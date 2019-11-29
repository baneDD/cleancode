import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';
import Author from './Author';
import Comments from './Comments';
import Content from './Content';
import Meta from './Meta';
import Tags from './Tags';

const Wrapper = styled.div`
  margin: 100px 50px 50px;
`;

const Post = ({ post }) => {
  const { html } = post;
  const { slug, tags, title, date } = post.frontmatter;

  return (
    <Wrapper>
      <Content body={html} title={title} />
      <div>
        <Meta date={date} />
        {tags && <Tags tags={tags} />}
        <Author />
      </div>
      <div>
        <Comments postSlug={slug} postTitle={post.frontmatter.title} />
      </div>
    </Wrapper>
  );
};

export default Post;
