import React from 'react';
import styled from 'styled-components';

const StyledWrapper = styled.div`
  .gatsby-resp-image-image,
  .gatsby-resp-image-background-image {
    border-radius: 10px;
  }
`;

const Content = ({ body }) => (
  <StyledWrapper
    // eslint-disable-next-line react/no-danger
    dangerouslySetInnerHTML={{ __html: body }}
  />
);

export default Content;
