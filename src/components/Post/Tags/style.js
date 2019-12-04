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
    padding: 4px;

    &:hover {
      text-decoration: underline;
    }
  }

  &:after {
    content: 'tags';
    position: absolute;
    right: 16px;
    bottom: -3px;
    padding: 0 4px;
    text-transform: uppercase;
    letter-spacing: 1px;
    font-size: 12px;
    color: #999;
    background: #fff;
  }
`;

export default StyledTagCloud;
