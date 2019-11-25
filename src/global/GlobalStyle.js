/* eslint-disable max-len */
import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset-advanced';

export default createGlobalStyle`
  ${reset};

  @import url('https://fonts.googleapis.com/css?family=Anonymous+Pro&display=swap');

  body {
    font-family: 'Anonymous Pro','Menlo','Monaco','Lucida Console','Liberation Mono','DejaVu Sans Mono','Bitstream Vera Sans Mono','Courier New',monospace;
    font-weight: 500;
  }

  h1,h2,h3,h4,h5,h6,ul,p {
    margin-top: 30px;
  }

  h1 {
    font-size: 20px;
    color: #333;
  }

  h2 {
    font-size: 16px;
    color: #333;
    text-transform: uppercase;
  }

  ul {

    li {
      line-height: 24px;
    }
  }

  p {
    font-size: 14px;
    color: #666;
  }

  a {
    color: #000;
    text-decoration: underline;
  }
`;
