import React, { useState, useRef, useEffect } from 'react';
import MenuButton from './MenuButton';
import { MenuLink, MenuItem, MenuList, MenuListContainer } from './style';

const NavMenu = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const node = useRef();

  const onClickHandler = () => setMenuOpen((old) => !old);
  const getClassName = () => (menuOpen ? 'open' : '');

  const handleClickOutside = (e) => {
    if (!node.current.contains(e.target)) {
      setMenuOpen(false);
    }
  };

  useEffect(() => {
    if (menuOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [menuOpen]);

  return (
    <nav ref={node} role="navigation">
      <MenuListContainer>
        <MenuButton
          className={getClassName()}
          onClickHandler={onClickHandler}
        />
        <MenuList className={getClassName()}>
          <MenuItem>
            <MenuLink to="/">Home</MenuLink>
          </MenuItem>
          <MenuItem>
            <MenuLink to="/about">About</MenuLink>
          </MenuItem>
          <MenuItem>
            <MenuLink to="/posts">Posts</MenuLink>
          </MenuItem>
          <MenuItem>
            <MenuLink to="/contact">Contact</MenuLink>
          </MenuItem>
        </MenuList>
      </MenuListContainer>
    </nav>
  );
};

export default NavMenu;
