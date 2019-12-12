import styled from 'styled-components';
import { VERY_SMALL_SCREEN, SANS } from '../../global/Theme';

const Wrapper = styled.p`
  font-family: ${SANS};
  font-size: 1em;
  text-align: right;
  margin-top: 3px;
  margin-right: 12px;

  @media ${VERY_SMALL_SCREEN} {
    font-size: 0.875em;
  }
`;

export default Wrapper;
