import styled from 'styled-components';
import { VERY_SMALL_SCREEN, DARK_GREY } from '../../global/Theme';

const Copy = styled.span`
  display: block;
  margin: 0 0 50px 0;
  text-align: center;
  font-size: 1em;
  color: ${DARK_GREY};

  @media ${VERY_SMALL_SCREEN} {
    margin: 0 0 20px 0;
    font-size: 0.875em;
  }
`;

export default Copy;
