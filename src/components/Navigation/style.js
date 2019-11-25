import styled from 'styled-components';
import { LIGHT_GREY, DARK_GREY, WHITE } from '../../global/Theme';

export const MenuLink = styled.a`
  text-decoration: none;
  color: ${LIGHT_GREY};

  transition: color 0.3s ease;

  &:hover {
    color: ${DARK_GREY};
  }
`;

export const MenuListContainer = styled.div`
  display: block;
  position: absolute;
  top: 50px;
  left: 50px;

  z-index: 1;

  user-select: none;

  a {
    border-bottom: none;
  }

  @media all and (max-width: 650px) {
    top: 20px;
    left: 20px;
  }
`;

export const MenuList = styled.ul`
  position: absolute;
  top: -40px;
  left: -40px;
  padding: 40px 40px 18px 40px;
  padding-top: 85px;

  list-style-type: none;

  transform-origin: 0% 0%;
  transform: translate(-100%, 0);

  transition: transform 0.5s cubic-bezier(0.77, 0.2, 0.05, 1);

  &.open {
    transform: none;
    opacity: 0.9;
    border-radius: 18px;

    @media all and (max-width: 650px) {
      top: -16px;
      left: -16px;
      padding: 16px;
      padding-top: 55px;
      background-color: ${WHITE};

      a {
        color: ${DARK_GREY};
      }
    }
  }
`;

export const MenuItem = styled.li`
  padding: 10px 0;
  font-size: 20px;
`;
