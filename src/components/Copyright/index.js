import React from 'react';
import { useSiteMetadata } from '../../hooks';
import Copy from './style';

const Copyright = (props) => {
  const {
    author: { name },
  } = useSiteMetadata();
  const { children } = props;

  const year = new Date().getFullYear();

  return (
    <Copy>
      {`©${name} ${year}`}
      {children && ' • '}
      {children}
    </Copy>
  );
};

export default Copyright;
