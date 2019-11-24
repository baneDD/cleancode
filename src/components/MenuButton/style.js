import styled from 'styled-components';

export const Container = styled.div`
  span:nth-of-type(3) {
    margin-bottom: 0px;
  }

  &.open {
    span:first-of-type {
      transform: rotate(45deg) translate(2px, 0px);
    }

    span:nth-of-type(2) {
      opacity: 0;
    }

    span:nth-of-type(3) {
      transform: rotate(-45deg) translate(-1px, -2px);
    }
  }
`;

export const Slat = styled.span`
  display: block;
  position: relative;

  width: 30px;
  height: 4px;
  margin-bottom: 5px;

  background: #999;
  border-radius: 3px;

  z-index: 1;

  transform-origin: 4px 0px;
  transition: transform 0.5s cubic-bezier(0.77, 0.2, 0.05, 1),
    background 0.5s cubic-bezier(0.77, 0.2, 0.05, 1), opacity 0.55s ease;
`;
