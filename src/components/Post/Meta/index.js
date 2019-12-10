import React from 'react';
import readingTime from 'reading-time';
import { formatDate } from '../../../utils';
import { Paragraph, Calendar, Clock } from './style';

const Meta = ({
  node: {
    frontmatter: { date },
    html,
    htmlAst,
  },
  className,
}) => (
  <Paragraph className={className}>
    <Calendar />
    {formatDate(date)}
    {(html || htmlAst) && (
      <>
        &nbsp;&nbsp;&nbsp;
        <Clock />
        {readingTime(html ? html : JSON.stringify(htmlAst)).text}
      </>
    )}
  </Paragraph>
);

export default Meta;
