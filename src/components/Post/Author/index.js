import React from 'react';
import { useSiteMetadata } from '../../../hooks';
import { Container, Copy } from './style';
import SocialBar from '../../SocialBar';

const Author = () => {
  const {
    author: { name },
  } = useSiteMetadata();

  return (
    <Container>
      <SocialBar />
      <Copy>
        &copy;&nbsp;
        {name}
        &nbsp;
        {new Date().getFullYear()}
      </Copy>
    </Container>
  );
};

export default Author;
