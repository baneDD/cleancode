import React from 'react';
import { Link } from 'gatsby';
import _ from 'lodash';
import { Container, TagList, Tag } from './style';

const Tags = ({ tags }) => (
  <Container>
    <TagList>
      {tags
        && tags.map((tag) => (
          <Tag key={tag}>
            <Link to={`/tag/${_.kebabCase(tag)}`}>{tag}</Link>
          </Tag>
        ))}
    </TagList>
  </Container>
);

export default Tags;
