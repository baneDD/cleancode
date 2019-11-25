import styled from 'styled-components';
import { LIGHT_GREY } from '../../../global/Theme';

export const Container = styled.div`
  position: relative;

  // This is the last visible item
  // so we remove the bottom margin
  span:nth-of-type(3) {
    margin-bottom: 0px;
  }

  // Phantom span used to define the
  // clickable area for the menu button
  span:nth-of-type(4) {
    position: absolute;
    top: 0px;
    left: 0px;
    width: 30px;
    height: 22px;
    opacity: 0;
  }

  &.open {
    span:first-of-type {
      transform: rotate(45deg) translate(2px, 0.5px);
    }

    span:nth-of-type(2) {
      transition: width 0.55s;
      width: 23px;
      opacity: 0;
    }

    span:nth-of-type(3) {
      transform: rotate(-45deg) translate(-1px, -2px);
    }

    span:nth-of-type(4) {
      width: 23px;
    }
  }
`;

export const Slat = styled.span`
  display: block;
  position: relative;

  width: 30px;
  height: 4px;
  margin-bottom: 5px;

  background: ${LIGHT_GREY};
  border-radius: 3px;

  z-index: 1;

  transform-origin: 4px 0px;
  transition: transform 0.5s cubic-bezier(0.77, 0.2, 0.05, 1),
    background 0.5s cubic-bezier(0.77, 0.2, 0.05, 1), opacity 0.55s ease;
`;
