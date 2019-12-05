import styled from 'styled-components';
import {
  LIGHT_GREY,
  VERY_SMALL_SCREEN,
  MOBILE_DEVICE,
} from '../../../global/Theme';

const Paragraph = styled.p`
  font-family: 'Oxygen', sans-serif;
  font-size: 14px;
  color: ${LIGHT_GREY};

  @media ${VERY_SMALL_SCREEN}, ${MOBILE_DEVICE} {
    font-size: 12px;
  }
`;

export default Paragraph;
