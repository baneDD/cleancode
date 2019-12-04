import React from 'react';
import readingTime from 'reading-time';
import { formatDate } from '../../../utils';
import Paragraph from './style';

const Meta = ({
  node: {
    frontmatter: { date },
    html,
  },
  className,
}) => (
  <Paragraph className={className}>
    {formatDate(date)}
    {html && ` · ${readingTime(html).text}`}
  </Paragraph>
);

export default Meta;
