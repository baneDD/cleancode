import styled from 'styled-components';
import { MOBILE_DEVICE } from '../../global/Theme';

const Wrapper = styled.p`
  font-family: 'Oxygen', sans-serif;
  font-size: 14px;
  text-align: right;
  margin-top: 3px;
  margin-right: 12px;

  ${MOBILE_DEVICE} {
    font-size: 11px;
  }
`;

export default Wrapper;
