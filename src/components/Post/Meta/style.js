import styled from 'styled-components';
import { Calendar, Clock } from '../../../assets/images';
import {
  LIGHT_GREY,
  VERY_SMALL_SCREEN,
  MOBILE_DEVICE,
  SANS,
} from '../../../global/Theme';

const Paragraph = styled.p`
  font-family: ${SANS};
  font-size: 0.875em;
  color: ${LIGHT_GREY};
  margin-top: 30px;

  @media ${VERY_SMALL_SCREEN}, ${MOBILE_DEVICE} {
    font-size: 0.75em;
  }
`;

const CommonSvgStyle = `
  margin-right: 5px;
  margin-bottom: -2px;
`;

const StyledCalendar = styled(Calendar)`
  ${CommonSvgStyle}
`;

const StyledClock = styled(Clock)`
  ${CommonSvgStyle}
`;

export { Paragraph, StyledCalendar as Calendar, StyledClock as Clock };
