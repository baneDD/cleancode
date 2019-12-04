import styled from 'styled-components';
import { LIGHT_GREY, MOBILE_DEVICE } from '../../global/Theme';

export const Container = styled.div`
  display: table; /* Allow the centering to work */
  margin: 0 auto;
  font-size: 14px;
  color: ${LIGHT_GREY};
  margin-top: 12px;
  letter-spacing: 10px;
  text-transform: uppercase;
`;

export const ItemList = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;
  overflow: hidden;
`;

export const Item = styled.li`
  float: left;
  margin-left: 20px;

  &:before {
    display: inline;
    content: '\u2219';
    margin-right: 20px;
  }

  &:first-child {
    margin-left: 0px;

    &:before {
      content: none;
    }
  }

  ${MOBILE_DEVICE} {
    float: initial;
    margin-left: 0px;
    margin-top: 10px;
    text-align: center;

    &:before {
      content: none;
    }
  }
`;
