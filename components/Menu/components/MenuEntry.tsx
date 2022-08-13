import React from "react"
import styled, { keyframes, DefaultTheme } from "styled-components"
import { Text } from "rebass"
import { MENU_ENTRY_HEIGHT } from "../config"

export interface Props {
  secondary?: boolean
  isActive?: boolean
  theme: DefaultTheme
}

const rainbowAnimation = keyframes`
  0%,
  100% {
    background-position: 0 0;
  }
  50% {
    background-position: 100% 0;
  }
`;

const LinkLabel = styled.div<{ isPushed: boolean, isActive?: boolean }>`
  transition: color 0.4s;
  flex-grow: 1;
  font-size: 1.7rem;
`;

const MenuEntry = styled.div<Props>`
  &:nth-child(1) {
    margin-top: 0px;
  }
  cursor: pointer;
  display: flex;
  align-items: center;
  height: ${MENU_ENTRY_HEIGHT}px;
  padding: ${({ secondary }) => (secondary ? "0 32px" : "0 16px")};
  font-size: ${({ secondary }) => (secondary ? "14px" : "16px")};
  background-color: ${({ isActive, theme }) => (isActive ? theme.colors.failure : theme.colors.background)};
  color: ${({ theme, isActive }) => isActive ? '#fcf6d5' : theme.colors.text};
  margin-top: 8px;
  a {
    display: flex;
    align-items: center;
    width: 100%;
    height: 100%;
  }
  &:hover {
    background-color: #ffd683;
    color: #4c1723;
  }
  // Safari fix
  flex-shrink: 0;
`;
MenuEntry.defaultProps = {
  secondary: false,
  isActive: false,
};

const LinkLabelMemo = React.memo(LinkLabel, (prev, next) => prev.isPushed === next.isPushed)

export { MenuEntry, LinkLabelMemo as LinkLabel }