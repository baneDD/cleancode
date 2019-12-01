import React, { useRef, useEffect } from 'react';
import { Wrapper, NavBar, StyledNavBtn, StyledTitle, Content } from './style';

const Page = ({ title, children }) => {
  const pageRef = useRef();

  useEffect(() => {
    pageRef.current.scrollTo(0, 0);
  });

  return (
    <Wrapper ref={pageRef}>
      <NavBar>
        <StyledNavBtn />
        {title && <StyledTitle>{title}</StyledTitle>}
      </NavBar>
      <Content>{children}</Content>
    </Wrapper>
  );
};

export default Page;
