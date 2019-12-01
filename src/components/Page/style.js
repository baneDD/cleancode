import styled from 'styled-components';
import Navigation from '../Navigation';

const Wrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  margin-bottom: 50px;
`;

const NavBar = styled.div`
  position: relative;
  display: block;
  height: 88px;

  @media all and (max-width: 650px) {
    height: 58px;
  }
`;

const StyledNavBtn = styled(Navigation)``;

const StyledTitle = styled.h1`
  display: inline-block;
  position: absolute;
  left: 112px;
  top: 22px;
  text-transform: capitalize;

  @media all and (max-width: 650px) {
    top: -8px;
    left: 68px;
  }
`;

const Content = styled.div`
  display: inline-block;
  margin: 0 50px;

  @media all and (max-width: 650px) {
    margin: 0 20px;
  }
`;

export { Wrapper, NavBar, StyledNavBtn, StyledTitle, Content };
