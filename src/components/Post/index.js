import React from 'react';
import readingTime from 'reading-time';
import Author from './Author';
import Comments from './Comments';
import Content from './Content';
import Meta from './Meta';
import Tags from './Tags';
import Page from '../Page';

const Post = ({ post }) => {
  const { html } = post;
  const stats = readingTime(html);
  const { slug, tags, title, date } = post.frontmatter;

  return (
    <Page title={title}>
      <p>{stats.text}</p>
      <Content body={html} />
      <div>
        <Meta date={date} />
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
