import styled from 'styled-components';
import {
  Twitter,
  LinkedIn,
  Github,
  Codepen,
  Codesandbox,
} from '../../assets/logos/social';

const Container = styled.div`
  padding: 10px;

  a {
    border-bottom: none;
    line-height: 1em;
  }
`;

const svgStyle = `
    width: 40px;
    height: 40px;
    padding: 5px;
    margin: 10px;
    border-radius: 10px;
    background: #eee;
    fill: #666;
    transition: padding 0.25s linear, fill 0.25s ease;

    &:hover {
        transition: padding 0.25s linear, fill 0.25s ease;
        padding: 0px;
        fill: #000;
    }
`;

const StyledTwitter = styled(Twitter)`
  ${svgStyle}
`;

const StyledLinkedIn = styled(LinkedIn)`
  ${svgStyle}
`;

const StyledGithub = styled(Github)`
  ${svgStyle}
`;

const StyledCodepen = styled(Codepen)`
  ${svgStyle}
`;

const StyledCodesandbox = styled(Codesandbox)`
  ${svgStyle}
`;

export {
  Container,
  StyledTwitter as Twitter,
  StyledLinkedIn as LinkedIn,
  StyledGithub as Github,
  StyledCodepen as Codepen,
  StyledCodesandbox as Codesandbox,
};
