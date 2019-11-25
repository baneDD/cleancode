import React, { useState } from 'react';
import MenuButton from './MenuButton';
import { MenuLink, MenuItem, MenuList, MenuListContainer } from './style';

const NavMenu = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const onClickHandler = () => setMenuOpen((old) => !old);
  const getClassName = () => (menuOpen ? 'open' : '');

  return (
    <nav role="navigation">
      <MenuListContainer>
        <MenuButton
          className={getClassName()}
          onClickHandler={onClickHandler}
        />
        <MenuList className={getClassName()}>
          <MenuItem>
            <MenuLink href="/">Home</MenuLink>
          </MenuItem>
          <MenuItem>
            <MenuLink href="/about">About</MenuLink>
          </MenuItem>
          <MenuItem>
            <MenuLink href="/posts">Posts</MenuLink>
          </MenuItem>
          <MenuItem>
            <MenuLink href="/contact">Contact</MenuLink>
          </MenuItem>
        </MenuList>
      </MenuListContainer>
    </nav>
  );
};

export default NavMenu;
