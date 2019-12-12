import styled from 'styled-components';
import { MEDIUM_GREY, VERY_SMALL_SCREEN } from '../../global/Theme';

export const ItemList = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;
  overflow: hidden;
`;

export const Item = styled.li`
  float: left;
  margin-left: 1em;

  &:before {
    display: inline;
    content: '\u2219';
    margin-right: 1em;
  }

  &:first-child {
    margin-left: 0;

    &:before {
      content: none;
    }
  }
`;

export const ResponsiveWrapper = styled.div`
  display: table; /* Allow the centering to work */
  margin: 0 auto;
  font-size: 0.875em;
  color: ${MEDIUM_GREY};
  margin-top: 0.75em;
  letter-spacing: 0.4em;
  text-transform: uppercase;

  @media ${VERY_SMALL_SCREEN} {
    ${Item} {
      float: initial;
      margin-left: 0px;
      margin-top: 0.625em;
      text-align: center;

      &:before {
        content: none;
      }
    }
  }
`;
