import React from 'react';
import { useSiteMetadata } from '../../../hooks';
import Container from './style';
import SocialBar from '../../SocialBar';
import Copyright from '../../Copyright';

const Author = () => {
  const {
    author: { name },
  } = useSiteMetadata();

  return (
    <Container>
      <SocialBar />
      <Copyright />
    </Container>
  );
};

export default Author;
