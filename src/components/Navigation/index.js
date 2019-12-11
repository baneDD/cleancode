import React, { useState, useRef, useEffect } from 'react';
import { useSiteMetadata } from '../../hooks';
import MenuButton from './MenuButton';
import { MenuLink, MenuItem, MenuList, ResponsiveWrapper } from './style';

const NavMenu = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const node = useRef();
  const { menuLinks } = useSiteMetadata();

  const onClickHandler = () => setMenuOpen((old) => !old);
  const getClassName = () => (menuOpen ? 'open' : '');

  const handleClickOutside = (e) => {
    if (!node.current.contains(e.target)) {
      setMenuOpen(false);
    }
  };

  const handleEscKey = (e) => {
    if (e.keyCode === 27) {
      setMenuOpen(false);
    }
  };

  useEffect(() => {
    if (menuOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      document.addEventListener('keydown', handleEscKey);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleEscKey);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleEscKey);
    };
  }, [menuOpen]);

  return (
    <nav ref={node} role="navigation">
      <ResponsiveWrapper>
        <MenuButton
          className={getClassName()}
          onClickHandler={onClickHandler}
        />
        <MenuList className={getClassName()}>
          {menuLinks.map((menuLink) => (
            <MenuItem key={menuLink.name}>
              <MenuLink to={menuLink.link}>{menuLink.name}</MenuLink>
            </MenuItem>
          ))}
        </MenuList>
      </ResponsiveWrapper>
    </nav>
  );
};

export default NavMenu;
