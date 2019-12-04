/* eslint-disable max-len */
import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset-advanced';
import { MEDIUM_GREY, BLACK } from './Theme';

export default createGlobalStyle`
  ${reset};

  @import url('https://fonts.googleapis.com/css?family=Anonymous+Pro&display=swap');
  @import url('https://fonts.googleapis.com/css?family=Oxygen&display=swap');

  body {
    font-family: 'Oxygen', sans-serif;
    color: ${BLACK};
  }

  h1,h2,h3,h4,h5,h6,ul,p {
    margin-top: 30px;
  }

  h1 {
    font-size: 20px;
    color: ${MEDIUM_GREY};
  }

  h2 {
    font-size: 16px;
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
    font-size: 14px;
  }

  a {
    line-height: 1.5em;
    text-decoration: none;
    border-bottom: 1px solid #76d7c4;
    transition: border-bottom 0.5sec linear, font-weight 0.5sec linear;
    &:hover {
      font-weight: 900;
      border-bottom: 2px solid #76d7c4;
      transition: border-bottom 0.5sec linear, font-weight 0.5sec linear;
    }
  }

  img {
    max-width: 100%;
  }
`;
