import styled from 'styled-components';
import { LIGHT_GREY, MOBILE_DEVICE } from '../../../global/Theme';

const Paragraph = styled.p`
  font-family: 'Oxygen', sans-serif;
  font-size: 14px;
  color: ${LIGHT_GREY};

  ${MOBILE_DEVICE} {
    font-size: 12px;
  }
`;

export default Paragraph;
