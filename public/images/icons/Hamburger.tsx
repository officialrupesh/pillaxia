import React from 'react';
import styled from 'styled-components';

interface BarProps {
  isOpen: boolean;
}

const MenuIcon = styled.div`
  cursor: pointer;
  width: 30px;
  height: 25px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const Bar = styled.div<BarProps>`
  width: 100%;
  height: 4px;
  background-color: currentColor;
  transition: all 0.3s ease-in-out;

  &:nth-child(1) {
    transform: ${({ isOpen }) => (isOpen ? 'rotate(-45deg) translate(-7px, 6px)' : 'none')};
  }

  &:nth-child(2) {
    opacity: ${({ isOpen }) => (isOpen ? '0' : '1')};
  }

  &:nth-child(3) {
    transform: ${({ isOpen }) => (isOpen ? 'rotate(45deg) translate(-7px, -6px)' : 'none')};
  }
`;

interface HamburgerProps {
  isOpen: boolean;
  onClick: () => void;
}

const Hamburger: React.FC<HamburgerProps> = ({ isOpen, onClick }) => {
  return (
    <MenuIcon onClick={onClick}>
      <Bar isOpen={isOpen} />
      <Bar isOpen={isOpen} />
      <Bar isOpen={isOpen} />
    </MenuIcon>
  );
};

export default Hamburger;
