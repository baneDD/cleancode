import styled from 'styled-components';
import { VERY_SMALL_SCREEN } from '../../global/Theme';

const Wrapper = styled.p`
  font-family: 'Oxygen', sans-serif;
  font-size: 14px;
  text-align: right;
  margin-top: 3px;
  margin-right: 12px;

  @media ${VERY_SMALL_SCREEN} {
    font-size: 11px;
  }
`;

export default Wrapper;
