import React from 'react';
import { Link } from 'gatsby';
import { Container, TagList, Tag } from './style';

const Tags = ({ tags }) => (
  <Container>
    <TagList>
      {tags
        && tags.map((tag) => (
          <Tag key={tag}>
            <Link to={`/tag/${tag}`}>{tag}</Link>
          </Tag>
        ))}
    </TagList>
  </Container>
);

export default Tags;
