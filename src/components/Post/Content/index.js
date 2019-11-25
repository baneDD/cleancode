import React from 'react';

const Content = ({ body, title }) => (
  <div>
    <h1>{title}</h1>
    <div
      // eslint-disable-next-line react/no-danger
      dangerouslySetInnerHTML={{ __html: body }}
    />
  </div>
);

export default Content;
