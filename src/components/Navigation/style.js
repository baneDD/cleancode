import styled from 'styled-components';
import { Link } from 'gatsby';
import {
  LIGHT_GREY,
  DARK_GREY,
  WHITE,
  VERY_SMALL_SCREEN,
} from '../../global/Theme';

export const MenuLink = styled(Link)`
  text-decoration: none;
  text-transform: capitalize;
  color: ${LIGHT_GREY};

  transition: color 0.3s ease;

  &:hover {
    color: ${DARK_GREY};
  }
`;

export const MenuList = styled.ul`
  position: absolute;
  top: -40px;
  left: -40px;
  padding: 40px 40px 18px 40px;
  padding-top: 50px;
  background-color: ${WHITE};
  opacity: 0.9;
  border-radius: 10px;

  list-style-type: none;

  transform-origin: 0% 0%;
  transform: translate(-100%, 0);

  transition: transform 0.5s cubic-bezier(0.77, 0.2, 0.05, 1);

  &.open {
    transform: none;
  }
`;

export const MenuItem = styled.li`
  font-size: 1.5em;
`;

export const ResponsiveWrapper = styled.div`
  display: block;
  position: relative;
  top: 50px;
  left: 50px;

  z-index: 1;

  user-select: none;

  a {
    border-bottom: none;
  }

  @media ${VERY_SMALL_SCREEN} {
    top: 20px;
    left: 20px;

    ${MenuList} {
      &.open {
        top: -44px;
        left: -16px;
        padding: 16px;
        padding-top: 55px;

        a {
          color: ${DARK_GREY};
        }
      }
    }
  }
`;
