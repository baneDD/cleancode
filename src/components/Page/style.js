import styled from 'styled-components';
import { SMALL_SCREEN, VERY_SMALL_SCREEN } from '../../global/Theme';

const NavBar = styled.div`
  position: relative;
  display: block;
  margin-bottom: 20px;
`;

const TitleCommon = `    
    display: inline-block;
    left: 112px;
    margin-right: 112px;
    width: calc(100% - 224px);`;

const Title = styled.h1`
  ${TitleCommon}
  position: relative;
  top: -5px;
  text-align: center;
  text-transform: uppercase;

  :before {
    content: '${(props) => props.title.length <= 40 && props.title}';
    ${TitleCommon}
    position: absolute;
    top: 0.9em;
    transform: scale(1, -1);
    backface-visibility: visible; 
    z-index: 1;   
  }

  :after {
    content: '';
    ${TitleCommon}
    position: absolute;
    top: 0.9em;
    height: 1.5em; 
    background-image: linear-gradient(to bottom, rgba(255,255,255, .6) 0%, rgba(255, 255, 255, 1) 50%);
    z-index: 2;
  }
`;

const Content = styled.div`
  display: inline-block;
  width: calc(100% - 100px);
  max-width: 1000px;
  margin: 0 auto;
`;

const ResponsiveWrapper = styled.div`
  position: relative;
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;

  @media ${SMALL_SCREEN} {
    ${Content} {
      margin: 0 50px;
    }

    ${Title} {
      :before,
      :after {
        content: '';
        width: 0px;
        height: 0px;
      }
    }
  }

  @media ${VERY_SMALL_SCREEN} {
    ${Content} {
      margin: 0 20px;
      width: calc(100% - 40px);
    }

    ${NavBar} {
      margin-bottom: 0px;
    }

    ${Title} {
      text-align: left;
      margin-right: 0;
      margin-top: 0;
      width: calc(100% - 68px);
      left: 68px;

      :before,
      :after {
        content: '';
        width: 0px;
        height: 0px;
      }
    }
  }
`;

export { ResponsiveWrapper, NavBar, Title, Content };
