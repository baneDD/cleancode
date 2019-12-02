import styled from 'styled-components';
import { TagCloud } from 'react-tagcloud';

const StyledTagCloud = styled(TagCloud)`
  background-color: black;
  padding: 20px;
  border-radius: 10px;
  text-align: center;

  &.simple-cloud .tag-cloud-tag {
    cursor: pointer;
  }
`;

export default StyledTagCloud;
