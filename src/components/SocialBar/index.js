import React from 'react';
import { useSiteMetadata } from '../../hooks';
import {
  Container,
  Twitter,
  LinkedIn,
  Github,
  Codepen,
  Codesandbox,
} from './style';

const SocialBar = () => {
  const {
    author: {
      social: { twitter, linkedin, github, codepen, codesandbox },
    },
  } = useSiteMetadata();

  return (
    <Container>
      {twitter && (
        <a href={twitter}>
          <Twitter />
        </a>
      )}
      {linkedin && (
        <a href={linkedin}>
          <LinkedIn />
        </a>
      )}
      {github && (
        <a href={github}>
          <Github />
        </a>
      )}
      {codepen && (
        <a href={codepen}>
          <Codepen />
        </a>
      )}
      {codesandbox && (
        <a href={linkedin}>
          <Codesandbox />
        </a>
      )}
    </Container>
  );
};

export default SocialBar;
