import React from 'react';
import { useSiteMetadata } from '../../hooks';
import Copy from './style';

const Copyright = () => {
  const {
    author: { name },
  } = useSiteMetadata();

  return (
    <Copy>
      &copy;&nbsp;
      {name}
      &nbsp;
      {new Date().getFullYear()}
    </Copy>
  );
};

export default Copyright;
