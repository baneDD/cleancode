import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset-advanced';
import {
  MEDIUM_GREY,
  DARK_GREY,
  BLACK,
  GREEN,
  SANS,
  SERIF,
  SANS_URL,
  SERIF_URL,
  MONO_URL,
} from './Theme';

export default createGlobalStyle`
  ${reset};

  @import url(${MONO_URL});
  @import url(${SANS_URL});
  @import url(${SERIF_URL});

  body {
    font-family: ${SANS};
    color: ${BLACK};
  }

  h1,h2,h3,h4,h5,h6,ul,p {
    margin-top: 30px;
  }

  h1 {
    font-size: 1.75em;
    color: ${MEDIUM_GREY};
  }

  h2 {
    font-size: 1.5;
    color: ${MEDIUM_GREY};
    text-transform: uppercase;
  }

  h3 {
    font-size: 1.25em;
    color: ${MEDIUM_GREY};
    text-transform: uppercase;
  }

  ul {
    li {
      line-height: 24px;
    }
  }

  p {
    line-height: 1.5em;
    font-family: ${SERIF};
    font-weight: 100;
    font-size: 1em;
    color: ${DARK_GREY};
    -webkit-font-smoothing: antialiased;
  }

  a {
    line-height: 1.5em;
    text-decoration: none;
    border-bottom: 1px solid ${GREEN};
    transition: border-bottom 0.5sec linear, font-weight 0.5sec linear;
    &:hover {
      font-weight: 900;
      border-bottom: 2px solid ${GREEN};
      transition: border-bottom 0.5sec linear, font-weight 0.5sec linear;
    }
  }

  img {
    max-width: 100%;
  }
`;
