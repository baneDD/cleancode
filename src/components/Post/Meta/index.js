import React from 'react';
import readingTime from 'reading-time';
import { formatDate } from '../../../utils';
import StyledMeta from './style';

const Meta = ({
  node: {
    frontmatter: { date },
    html,
  },
}) => (
  <StyledMeta>
    {formatDate(date)}
    {html && ` · ${readingTime(html).text}`}
  </StyledMeta>
);

export default Meta;
