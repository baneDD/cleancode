/* eslint-disable max-len */
import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset-advanced';
import { MEDIUM_GREY, BLACK } from './Theme';

export default createGlobalStyle`
  ${reset};

  @import url('https://fonts.googleapis.com/css?family=Anonymous+Pro&display=swap');

  body {
    font-family: 'Anonymous Pro','Menlo','Monaco','Lucida Console','Liberation Mono','DejaVu Sans Mono','Bitstream Vera Sans Mono','Courier New',monospace;
    font-weight: 500;
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
    border-bottom: 1px solid ${BLACK}
  }
`;
