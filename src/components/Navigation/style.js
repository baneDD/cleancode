import styled from 'styled-components';

export const MenuLink = styled.a`
  text-decoration: none;
  color: #999;

  transition: color 0.3s ease;

  &:hover {
    color: #333;
  }
`;

export const MenuListContainer = styled.div`
  display: block;
  position: absolute;
  top: 50px;
  left: 50px;

  z-index: 1;

  user-select: none;
`;

export const MenuList = styled.ul`
  position: absolute;
  margin: -100px 0 0 -50px;
  padding: 50px;
  padding-top: 125px;

  list-style-type: none;

  transform-origin: 0% 0%;
  transform: translate(-100%, 0);

  transition: transform 0.5s cubic-bezier(0.77, 0.2, 0.05, 1);

  &.open {
    transform: none;
  }
`;

export const MenuItem = styled.li`
  padding: 10px 0;
  font-size: 20px;
`;
