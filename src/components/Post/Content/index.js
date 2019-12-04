import React from 'react';
import styled from 'styled-components';

const StyledWrapper = styled.div`
  .gatsby-resp-image-image,
  .gatsby-resp-image-background-image {
    border-radius: 10px;
  }

  .gatsby-resp-image-wrapper {
    margin-top: 40px;

    a {
      border-bottom: none;
    }
  }
`;

const Content = ({ children }) => <StyledWrapper>{children}</StyledWrapper>;

export default Content;
