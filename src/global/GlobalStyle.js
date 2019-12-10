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

const PenSvg =
  '<svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24"><path d="M7.127 22.562l-7.127 1.438 1.438-7.128 5.689 5.69zm1.414-1.414l11.228-11.225-5.69-5.692-11.227 11.227 5.689 5.69zm9.768-21.148l-2.816 2.817 5.691 5.691 2.816-2.819-5.691-5.689z" fill="rgb(144,144,144)"/></svg>';

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

  blockquote {
    margin-top: 30px;
    padding: 0 10px 10px;
    background: #eee;
    border-radius: 10px;

    p {
      margin-top: 0;
      padding-top: 10px;
      text-align: center;
      font-family: ${SANS};
      font-style: italic;
      font-size: 1.2em;
    }

    p:last-child {
      font-size: 1em;
      margin-top: 0;
      padding-top: 7px;
      
      &:before {
      content: url('data:image/svg+xml;charset=UTF-8, ${PenSvg}');
      margin-right: 5px;
    }
    }
  }

  .gatsby-highlight {
  background-color: #1d1f21;
  border-radius: 0.3em;
  margin: 30px 0 0;
  padding: 1em;
  overflow: auto;
}

.gatsby-highlight pre[class*="language-"].line-numbers {
  padding: 0;
  padding-left: 2.8em;
  overflow: initial;
}
`;
