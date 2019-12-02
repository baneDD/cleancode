import React from 'react';
import readingTime from 'reading-time';
import { formatDate } from '../../../utils';

const Meta = ({ node }) => (
  <>
    {formatDate(node.frontmatter.date)}
    {node.html && ` · ${readingTime(node.html).text}`}
  </>
);

export default Meta;
