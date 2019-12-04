import React from 'react';
import RehypeReact from 'rehype-react';
import Author from './Author';
import Comments from './Comments';
import Content from './Content';
import Meta from './Meta';
import Tags from './Tags';
import Page from '../Page';
import ImageCaption from '../ImageCaption';

const renderAst = new RehypeReact({
  createElement: React.createElement,
  components: { 'image-caption': ImageCaption },
}).Compiler;

const Post = ({ post }) => {
  const { htmlAst } = post;
  const { slug, tags, title } = post.frontmatter;

  return (
    <Page title={title}>
      <Meta node={post} />
      <Content>{renderAst(htmlAst)}</Content>
      <div style={{ marginTop: '30px' }}>
        {tags && (
          <Tags
            tags={tags.map((tag) => ({ value: tag, count: 1 }))}
            minSize={16}
            maxSize={16}
          />
        )}
        <Author />
      </div>
      <div>
        <Comments postSlug={slug} postTitle={post.frontmatter.title} />
      </div>
    </Page>
  );
};

export default Post;
