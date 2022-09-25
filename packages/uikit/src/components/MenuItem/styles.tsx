import styled from "styled-components";
import { StyledMenuItemProps } from "./types";

export const StyledMenuItemContainer = styled.div<StyledMenuItemProps>`
  position: relative;

  ${({ $isActive, $variant, theme }) =>
    $isActive &&
    $variant === "subMenu" &&
    `
      &:after{
        content: "";
        position: absolute;
        bottom: 0;
        height: 4px;
        width: 100%;
        background-color: ${theme.colors.primary};
        border-radius: 2px 2px 0 0;
      }
    `};
`;

const StyledMenuItem = styled.a<StyledMenuItemProps>`
  position: relative;
  display: flex;
  align-items: center;

  color: white;
  font-size: 16px;
  font-weight: bold;
  opacity: ${({ $isDisabled }) => ($isDisabled ? 0.5 : 1)};

  ${({ $statusColor, theme }) =>
    $statusColor &&
    `
    &:after {
      content: "";
      border-radius: 100%;
      background: ${theme.colors[$statusColor]};
      height: 8px;
      width: 8px;
      margin-left: 12px;
    }
  `}

  ${({ $variant }) =>
    $variant === "default"
      ? `
    padding: 0 16px;
    height: 48px;
  `
      : `
    padding: 4px 4px 0px 4px;
    height: 42px;
  `}

  &:before {
    content: "";
    opacity: 0;
    position: absolute;
    height: 36px;
    width: 65px;
    background-image: url("/images/button/menu-border.svg");
    background-repeat: no-repeat;
    transition: .3s linear;
    top: 0;
    left: 0;
  }
  &:after {
    content: "";
    opacity: 0;
    position: absolute;
    height: 36px;
    width: 65px;
    background-image: url("/images/button/menu-border.svg");
    background-repeat: no-repeat;
    transition: .3s linear;
    bottom: 0;
    right: 0;
  }

  &:hover {
    color: #ff004d;
    text-shadow: 0 0 16px #ff004d;
    &:before {
      transform: translateY(-6px);
      opacity: 1;
    }
    &:after {
      transform: matrix(-1,0,0,1,0,0) translateY(8px);
      opacity: 1;
    }
  }
`;

export default StyledMenuItem;
