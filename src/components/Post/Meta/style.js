import styled from 'styled-components';
import {
  LIGHT_GREY,
  VERY_SMALL_SCREEN,
  MOBILE_DEVICE,
} from '../../../global/Theme';

const Paragraph = styled.p`
  font-family: 'Oxygen', sans-serif;
  font-size: 0.875em;
  color: ${LIGHT_GREY};

  @media ${VERY_SMALL_SCREEN}, ${MOBILE_DEVICE} {
    font-size: 0.75em;
  }
`;

export default Paragraph;
