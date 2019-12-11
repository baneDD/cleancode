import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset-advanced';
import {
  MEDIUM_GREY,
  DARK_GREY,
  BLACK,
  GREEN,
  SANS,
  SERIF,
  CURSIVE,
  FONTS_URL,
} from './Theme';

export default createGlobalStyle`
  ${reset};

  @import url(${FONTS_URL});

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
      font-family: ${CURSIVE};
      font-style: italic;

      :first-child {
        font-size: 1.3em;

        :before, :after {
          content: '"';
        }
      }

      :last-child {
        font-size: 1em;
        padding-top: 7px;
      
        :before {
          content: url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIj8+PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2ZXJzaW9uPSIxLjEiIGlkPSJDYXBhXzEiIHg9IjBweCIgeT0iMHB4IiB2aWV3Qm94PSIwIDAgMzM0Ljg3NiAzMzQuODc2IiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCAzMzQuODc2IDMzNC44NzY7IiB4bWw6c3BhY2U9InByZXNlcnZlIiB3aWR0aD0iMTNweCIgaGVpZ2h0PSIxM3B4Ij48ZyB0cmFuc2Zvcm09Im1hdHJpeCgtMC45OTg0MDEgMCAwIDAuOTk4NDAxIDMzNC42MDggMC4yNjc2OTkpIj48Zz48cGF0aCBkPSJNMzUuMjQzLDk0Ljg4OGMxMi44ODUsMTkuNDgzLDI0LjE5OCw0Mi42MzcsMjUuOTgyLDQ2LjYxOGMwLjUxMSwxLjE0OCwxLjMxNiwzLjg1NiwyLjIxOSw3LjE2OSAgIGM2LjI4Mi04Ljg3NywxMy45NDYtMTYuMjE0LDIzLjEwNS0yMS41OTljMTMuMDctNy42OCwyOC4wOTMtMTAuODQ1LDQ0LjMxMi0xMC4wODRjLTMuOTE2LTYuMjE3LTcuNDc5LTEyLjYxOS05LjE5Mi0xNy42MDEgICBjLTQuNC0xMi43NzYtMjAuMzQ4LTY1LjUzLTI5LjY3Ni04OC4wNTNjLTkuMzIzLTIyLjUyMy00NC44MzQtNi40OTQtNjUuNDcsNS4yMzhTNC43Myw0Mi43NjUsNi44MjksNDYuNzQ3ICAgQzguOTIzLDUwLjcyOCwyMi4zNTgsNzUuNDA1LDM1LjI0Myw5NC44ODh6IiBkYXRhLW9yaWdpbmFsPSIjMDEwMDAyIiBjbGFzcz0iYWN0aXZlLXBhdGgiIGRhdGEtb2xkX2NvbG9yPSIjMDEwMDAyIiBmaWxsPSIjOTk5OTk5Ii8+PHBhdGggZD0iTTExNC4zNywxNjcuNDc4YzI3LjQ0Ni0xMS4zMTMsMzMuMzE0LDIuNDEsMzMuMzE0LDIuNDFjOC42OTctOC4wNjYsMi42MjItMTcuNjAxLDIuNjIyLTE3LjYwMSAgIHMyLjE5Ny00LjA4NS0xLjM2LTguMjc4Yy0yLjE3Ni0yLjU1Ni05LjE4Ny0xMS44MzUtMTUuMzIyLTIxLjU4MmMtMTYuMjE5LTAuNzYxLTMxLjI0MiwyLjQwNC00NC4zMTIsMTAuMDg0ICAgYy05LjE1OSw1LjM4NS0xNi44MjMsMTIuNzE3LTIzLjEwNSwyMS41OTljMi4yMzUsOC4xODYsNS4xMDIsMjAuMTc5LDUuODQ3LDIyLjI2OGMxLjA1LDIuOTMyLDMuNzY5LDYuOTEzLDYuMjg4LDcuNDM1ICAgYzIuNTEzLDAuNTIyLDMuOTgxLDIuOTMyLDMuOTgxLDIuOTMyYzMuMjQ3LDYuNTk4LDEzLjQwNyw3LjAxNiwxMy40MDcsNy4wMTZTODYuOTE5LDE3OC43OTEsMTE0LjM3LDE2Ny40Nzh6IiBkYXRhLW9yaWdpbmFsPSIjMDEwMDAyIiBjbGFzcz0iYWN0aXZlLXBhdGgiIGRhdGEtb2xkX2NvbG9yPSIjMDEwMDAyIiBmaWxsPSIjOTk5OTk5Ii8+PHBhdGggZD0iTTMxOS4xNTYsMjI1LjY1OWMtOC40MDktNi41NzYtMTkuNjYyLTkuNzM2LTI4LjYzMS0xNS41NTYgICBjLTIzLjE4Ny0xNS4wNDQsNi44NDgtMjguOTAzLDE2Ljc5LTM3Ljg2N2MxNi44ODMtMTUuMjE5LDIxLjMxNi0zMi43NTQsMTQuMzI2LTU0LjA0OGMtMi4xODYtNi42NjMtNi45MjQtMTMuNjktNC43MzctNy4wMzMgICBjMTEuOTUsMzYuNDItMjYuMDI2LDUzLjgyNS00NS4zMTMsNzQuMTg5Yy03LjEwMyw3LjUtNi4xMjQsMTUuNjMyLDEuMjU2LDIzLjExNmMxNC4yNzgsMTQuNDc5LDU3LjIzLDI2LjcsMzAuNjA2LDQ5LjIwNyAgIGMtMTguNjYxLDE1Ljc3My00Ny42MjQsMTcuMTg3LTY4LjMwOSwzMC41MDhjLTIuNzk2LDEuOC0zLjEyMiw2LjY0MS0wLjMxLDguNjFjMjAuMzE1LDE0LjIwNyw0OC40NCwxMC43ODYsNjguNDU2LDIzLjY4NyAgIGMtMzQuNTI3LDEwLjM4OS03MC43NDYsMy42MTItMTA2LjI1MiwwLjM1OWMwLjE0MS0xLjAwNiwwLjAxNi0xLjg2LDAuMDE2LTEuODZjLTQuNTE0LTI3LjY1OC00Ljk3MS0zMy42NTctMi44NzctNDcuNDg4ICAgYzIuMDk0LTEzLjgyNiwwLTE1LjA4OCwwLTE1LjA4OGMtMjEuMzctMjkuMzMzLTQ3LjMzMS04NC43My00Ny4zMzEtODQuNzNjLTMuNDU5LTUuNzYtMTcuMTgyLTguMjAyLTM0LjE1Mi0wLjYzMSAgIGMtMTcuNjAxLDcuODU5LTE2LjM0NCwxOC42NDUtMTYuMzQ0LDE4LjY0NWwyOS44Niw4OC4wMjZjMS4wNSwyLjgyOCw1Ljg2OSw0LjE4OCw1Ljg2OSw0LjE4OCAgIGMyNy45NzMsOC4wNjYsNTAuNzc0LDM2LjMzMyw1My44MTQsNDAuNzMzYzMuMDQsNC40LDUuMjM4LDIuNzI1LDUuMjM4LDIuNzI1bC0zMi42MjMtNzMuMDYzYy0yLjQ5MS0wLjU3MS01LjAzMS0yLjczNi02LjUyNy01Ljk0NSAgIGMtMi4xNjUtNC42NS0xLjMwNS05LjYzMywxLjkyLTExLjEzNGMzLjIyNS0xLjUwMSw3LjU5MywxLjA1LDkuNzU4LDUuN2MxLjYzMiwzLjUwMywxLjUzOSw3LjE5LDAuMDIyLDkuNDQybDMxLjEwMSw3MC4yNzMgICBjLTAuMjI4LTAuMDIyLTAuNDU3LTAuMDQ0LTAuNjg1LTAuMDY1Yy02Ljk0LTAuNTk4LDAuMzQzLDguMjYyLDE5Ljg0MiwxMC43MWM0My40NTgsNS40NTUsNjAuNDU1LDUuMTE4LDEwMi4zMzYtMy43NTMgICBjNC4yOTctMC45MDgsNC4zNzMtNi4zOTYsMS41NS05LjI3NGMtMTguNTQ3LTE4LjkyOC00NS43MDQtMTQuODkyLTY3LjkzOS0yNS4yMzJDMjc4LjE3MywyODEuMSwzNTUuNzc4LDI1NC4zMDEsMzE5LjE1NiwyMjUuNjU5eiIgZGF0YS1vcmlnaW5hbD0iIzAxMDAwMiIgY2xhc3M9ImFjdGl2ZS1wYXRoIiBkYXRhLW9sZF9jb2xvcj0iIzAxMDAwMiIgZmlsbD0iIzk5OTk5OSIvPjwvZz48L2c+PC9zdmc+);
          margin-right: 3px;
        }
      }
    }
  }

  :not(pre) > code[class*="language-"] {
    padding: .3em .3em .15em;
    color: #999;
  }

  .gatsby-highlight {
    background-color: #1d262f;
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
