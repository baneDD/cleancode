import styled from 'styled-components';
import { TagCloud } from 'react-tagcloud';

const StyledTagCloud = styled(TagCloud)`
  position: relative;
  border: 2px solid #eee;
  padding: 10px;
  border-radius: 10px;
  text-align: center;

  &.simple-cloud .tag-cloud-tag {
    cursor: pointer;
    padding: 7px;

    &:hover {
      text-decoration: underline;
    }
  }

  &:after {
    content: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgdmlld0JveD0iMCAwIDU0Mi4yIDU0Mi4yIj4gICAgPHN0eWxlPi5he2ZpbGw6Izk5OTt9PC9zdHlsZT4gICAgPHBhdGggZD0iTTQzMi41IDMxMC42YzAtOS45LTMuNS0xOC42LTEwLjYtMjZMMjE3LjggODAuOGMtNy4yLTcuMi0xNi45LTEzLjQtMjkuMS0xOC40IC0xMi4yLTUtMjMuMy03LjYtMzMuNC03LjZIMzYuNWMtOS45IDAtMTguNSAzLjYtMjUuNyAxMC44QzMuNiA3Mi45IDAgODEuNSAwIDkxLjR2MTE4LjhjMCAxMC4xIDIuNSAyMS4yIDcuNiAzMy40IDUgMTIuMiAxMS4yIDIxLjggMTguNCAyOC44TDIzMC4xIDQ3Ni44YzcgNyAxNS42IDEwLjYgMjUuNyAxMC42IDkuOSAwIDE4LjYtMy41IDI2LTEwLjZsMTQwLjItMTQwLjVDNDI5IDMyOS4zIDQzMi41IDMyMC43IDQzMi41IDMxMC42ek0xMTcuMiAxNzJjLTcuMSA3LjEtMTUuOCAxMC43LTI1LjggMTAuNyAtMTAuMSAwLTE4LjctMy42LTI1LjgtMTAuNyAtNy4xLTcuMS0xMC43LTE1LjctMTAuNy0yNS44IDAtMTAuMSAzLjYtMTguNyAxMC43LTI1LjggNy4xLTcuMSAxNS44LTEwLjcgMjUuOC0xMC43IDEwLjEgMCAxOC43IDMuNiAyNS44IDEwLjcgNy4xIDcuMSAxMC43IDE1LjcgMTAuNyAyNS44QzEyNy45IDE1Ni4zIDEyNC4zIDE2NC45IDExNy4yIDE3MnoiIGNsYXNzPSJhIi8+ICAgIDxwYXRoIGQ9Ik01MzEuNiAyODQuN0wzMjcuNSA4MC44Yy03LjItNy4yLTE2LjktMTMuNC0yOS4xLTE4LjQgLTEyLjItNS0yMy4zLTcuNi0zMy40LTcuNmgtNjRjMTAuMSAwIDIxLjIgMi41IDMzLjQgNy42IDEyLjIgNSAyMS45IDExLjIgMjkuMSAxOC40bDIwNC4xIDIwMy45YzcgNy40IDEwLjYgMTYuMSAxMC42IDI2IDAgMTAuMS0zLjUgMTguNi0xMC42IDI1LjdMMzMzLjUgNDcwLjVjNS43IDUuOSAxMC44IDEwLjIgMTUuMSAxMi44IDQuNCAyLjcgMTAgNCAxNi44IDQgOS45IDAgMTguNi0zLjUgMjYtMTAuNmwxNDAuMi0xNDAuNWM3LTcgMTAuNi0xNS42IDEwLjYtMjUuN0M1NDIuMiAzMDAuNyA1MzguNyAyOTIuMSA1MzEuNiAyODQuN3oiIGNsYXNzPSJhIi8+PC9zdmc+);
    position: absolute;
    right: 16px;
    bottom: -5px;
    padding: 0 4px;
    text-transform: uppercase;
    letter-spacing: 1px;
    font-size: 1em;
    color: #999;
    background: #fff;
  }
`;

export default StyledTagCloud;
