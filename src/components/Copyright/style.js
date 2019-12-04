import styled from 'styled-components';
import { VERY_SMALL_SCREEN, LIGHT_GREY } from '../../global/Theme';

const Copy = styled.span`
  display: block;
  margin: 0 0 50px 0;
  text-align: center;
  font-size: 14px;
  color: ${LIGHT_GREY};

  @media ${VERY_SMALL_SCREEN} {
    margin: 0 0 20px 0;
    font-size: 12px;
  }
`;

export default Copy;
