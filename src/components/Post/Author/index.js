import React from 'react';
import { useSiteMetadata } from '../../../hooks';
import { Container, Bio, Twitter } from './style';

const Author = () => {
  const { author } = useSiteMetadata();

  return (
    <Container>
      <Twitter>
        <a
          href={author.contacts.twitter}
          rel="noopener noreferrer"
          target="_blank"
        >
          {`${author.name} on Twitter`}
        </a>
      </Twitter>
      <Bio>{author.bio}</Bio>
    </Container>
  );
};

export default Author;
