import React from 'react';

const Content = ({ body }) => (
  <div
    // eslint-disable-next-line react/no-danger
    dangerouslySetInnerHTML={{ __html: body }}
  />
);

export default Content;
