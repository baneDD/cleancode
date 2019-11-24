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
`;
