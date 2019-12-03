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
      <Copyright>
        &copy;&nbsp;
        {name}
        &nbsp;
        {new Date().getFullYear()}
      </Copyright>
    </Container>
  );
};

export default Author;
