import React, { useRef, useEffect } from 'react';
import Navigation from '../Navigation';
import { ResponsiveWrapper, NavBar, Title, Content } from './style';

const Page = ({ title, children }) => {
  const pageRef = useRef();

  useEffect(() => {
    pageRef.current.scrollTo(0, 0);
  });

  return (
    <ResponsiveWrapper ref={pageRef}>
      <NavBar>
        <Navigation />
        {title && <Title>{title}</Title>}
      </NavBar>
      <Content>{children}</Content>
    </ResponsiveWrapper>
  );
};

export default Page;
