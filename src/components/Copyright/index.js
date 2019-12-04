import React from 'react';
import { useSiteMetadata } from '../../hooks';
import Copy from './style';

const Copyright = () => {
  const {
    author: { name },
  } = useSiteMetadata();

  const year = new Date().getFullYear();

  return <Copy>{`©${name} ${year}`}</Copy>;
};

export default Copyright;
