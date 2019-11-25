import styled from 'styled-components';
import { LIGHT_GREY } from '../../../global/Theme';

export const Container = styled.div`
  display: table; /* Allow the centering to work */
  margin: 0 auto;
  font-size: 14px;
  color: ${LIGHT_GREY};
  margin-top: 12px;
  text-transform: uppercase;

  a {
    text-decoration: none;
    border-bottom: 1px solid ${LIGHT_GREY};
    color: ${LIGHT_GREY};
  }
`;

export const TagList = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;
  overflow: hidden;
`;

export const Tag = styled.li`
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

  @media all and (max-width: 650px) {
    float: initial;
    margin-left: 0px;
    margin-top: 10px;
    text-align: center;

    &:before {
      content: none;
    }
  }
`;
