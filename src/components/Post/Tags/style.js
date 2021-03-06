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
    content: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 542.2 542.2'%3E%3Cstyle%3E.a%7Bfill:%23999;%7D%3C/style%3E%3Cpath d='M432.5 310.6c0-9.9-3.5-18.6-10.6-26L217.8 80.8c-7.2-7.2-16.9-13.4-29.1-18.4 -12.2-5-23.3-7.6-33.4-7.6H36.5c-9.9 0-18.5 3.6-25.7 10.8C3.6 72.9 0 81.5 0 91.4v118.8c0 10.1 2.5 21.2 7.6 33.4 5 12.2 11.2 21.8 18.4 28.8L230.1 476.8c7 7 15.6 10.6 25.7 10.6 9.9 0 18.6-3.5 26-10.6l140.2-140.5C429 329.3 432.5 320.7 432.5 310.6zM117.2 172c-7.1 7.1-15.8 10.7-25.8 10.7 -10.1 0-18.7-3.6-25.8-10.7 -7.1-7.1-10.7-15.7-10.7-25.8 0-10.1 3.6-18.7 10.7-25.8 7.1-7.1 15.8-10.7 25.8-10.7 10.1 0 18.7 3.6 25.8 10.7 7.1 7.1 10.7 15.7 10.7 25.8C127.9 156.3 124.3 164.9 117.2 172z' class='a'/%3E%3Cpath d='M531.6 284.7L327.5 80.8c-7.2-7.2-16.9-13.4-29.1-18.4 -12.2-5-23.3-7.6-33.4-7.6h-64c10.1 0 21.2 2.5 33.4 7.6 12.2 5 21.9 11.2 29.1 18.4l204.1 203.9c7 7.4 10.6 16.1 10.6 26 0 10.1-3.5 18.6-10.6 25.7L333.5 470.5c5.7 5.9 10.8 10.2 15.1 12.8 4.4 2.7 10 4 16.8 4 9.9 0 18.6-3.5 26-10.6l140.2-140.5c7-7 10.6-15.6 10.6-25.7C542.2 300.7 538.7 292.1 531.6 284.7z' class='a'/%3E%3C/svg%3E");
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
