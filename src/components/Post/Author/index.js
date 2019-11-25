import React from 'react';
import { useSiteMetadata } from '../../../hooks';

const Author = () => {
  const { author } = useSiteMetadata();

  return (
    <div>
      <p>{author.bio}</p>
      <p>
        <a
          href={author.contacts.twitter}
          rel="noopener noreferrer"
          target="_blank"
        >
          <strong>{author.name}</strong>
          {' on Twitter'}
        </a>
      </p>
    </div>
  );
};

export default Author;
