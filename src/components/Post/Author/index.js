import React from 'react';
import { useSiteMetadata } from '../../../hooks';
import Container from './style';
import SocialBar from '../../SocialBar';
import Copyright from '../../Copyright';

const Author = ({ filename }) => {
  const { postsGithubEditLink } = useSiteMetadata();

  return (
    <Container>
      <SocialBar />
      <Copyright>
        {' '}
        {filename && postsGithubEditLink && (
          <a href={`${postsGithubEditLink}${filename}`}>Edit post on Github</a>
        )}
      </Copyright>
    </Container>
  );
};

export default Author;
