import styled from 'styled-components';
import { SMALL_SCREEN, VERY_SMALL_SCREEN } from '../../global/Theme';

const NavBar = styled.div`
  position: relative;
  display: block;
  height: 88px;
`;

const Title = styled.h1`
  display: inline-block;
  position: absolute;
  left: 112px;
  top: 16px;
  margin-right: 112px;
  width: calc(100% - 224px);
  text-align: center;
  text-transform: capitalize;
`;

const Content = styled.div`
  display: inline-block;
  max-width: 1000px;
  margin: 0 auto;
`;

const ResponsiveWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;

  @media ${SMALL_SCREEN} {
    ${Content} {
      margin: 0 50px;
    }
  }

  @media ${VERY_SMALL_SCREEN} {
    ${Content} {
      margin: 0 20px;
    }

    ${Title} {
      text-align: left;
      margin-right: 0;
      width: calc(100% - 68px);
      top: -8px;
      left: 68px;
    }

    ${NavBar} {
      height: 58px;
    }
  }
`;

export { ResponsiveWrapper, NavBar, Title, Content };
