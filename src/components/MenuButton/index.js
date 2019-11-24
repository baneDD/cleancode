import React from 'react';
import { Slat, Container } from './style';

const MenuButton = ({ className, onClickHandler }) => (
  <Container className={className} onClick={onClickHandler}>
    <Slat />
    <Slat />
    <Slat />
    <Slat />
  </Container>
);

export default MenuButton;
