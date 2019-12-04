import styled from 'styled-components';
import { MOBILE_DEVICE, LIGHT_GREY } from '../../global/Theme';

const Copy = styled.span`
  display: block;
  margin: 0 0 50px 0;
  text-align: center;
  font-size: 14px;
  color: ${LIGHT_GREY};

  ${MOBILE_DEVICE} {
    margin: 0 0 20px 0;
    font-size: 12px;
  }
`;

export default Copy;
