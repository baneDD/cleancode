import React from 'react';
import { navigate } from 'gatsby';
import _ from 'lodash';
import StyledTagCloud from './style';

const tagCloudColorOptions = {
  luminosity: 'light',
  hue: 'green',
};

const Tags = ({ tags }) => (
  <StyledTagCloud
    minSize={16}
    maxSize={32}
    colorOptions={tagCloudColorOptions}
    tags={tags}
    className="simple-cloud"
    style={{
      cursor: 'pointer',
    }}
    onClick={(tag) => navigate(`/tag/${_.kebabCase(tag.value)}`)}
  />
);

export default Tags;
