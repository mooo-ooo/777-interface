import styled, { DefaultTheme, css } from "styled-components";
import { space, layout, variant } from "styled-system";
import { scaleVariants, styleVariants } from "./theme";
import { BaseButtonProps, variants } from "./types";

interface ThemedButtonProps extends BaseButtonProps {
  theme: DefaultTheme;
}

interface TransientButtonProps extends ThemedButtonProps {
  $isLoading?: boolean;
}

const getDisabledStyles = ({ $isLoading, theme }: TransientButtonProps) => {
  if ($isLoading === true) {
    return `
      &:disabled,
      &.pancake-button--disabled {
        cursor: not-allowed;
      }
    `;
  }

  return `
    &:disabled,
    &.pancake-button--disabled {
      background-color: ${theme.colors.backgroundDisabled};
      border-color: ${theme.colors.backgroundDisabled};
      box-shadow: none;
      color: ${theme.colors.textDisabled};
      cursor: not-allowed;
    }
  `;
};

const getVariantStyles = ({ variant: vr = variants.PRIMARY }: TransientButtonProps) => {
  const base = `
    &:hover,
    &:active {
      filter: drop-shadow(0 0 12px ${styleVariants[vr]?.backgroundColor});
      &:before {
        transform: translateY(-6px);
        opacity: 1;
      }
      &:after {
        transform: matrix(-1, 0, 0, 1, 0, 0) translateY(6px);
        opacity: 1;
      }
    }

    &:before,
    &:after {
      content: '';
      height: 3px;
      width: 32px;
      opacity: 0;
      background-size: auto 100%;
      transition: 0.3s linear;
      position: absolute;
      z-index: 20;
      background-repeat: no-repeat;
      background-image: ${styleVariants[vr]?.backgroundHover};
    }
    &:before {
      top: 0px;
      opacity: 0;
      left: 2px;
      background-position: top 0 center;
    }
    &:after {
      bottom: 0px;
      right: 2px;
      background-position: bottom 0 center;
      transform: matrix(-1, 0, 0, 1, 0, 0);
    }
  `
  if (vr === variants.PRIMARY) {
    return `
      border-radius: 0px;
      background-image: linear-gradient(-135deg,transparent 6px,${styleVariants[vr]?.backgroundColor} 0),linear-gradient(45deg,transparent 6px,${styleVariants[vr]?.backgroundColor} 0);
      background-size: 50% 100%,50% 100%;
      background-position: right 0 top 0,0 0;
      transition: 0.3s linear;
      background-repeat: no-repeat;
      background-color: transparent;
      box-shadow: none;
      filter: drop-shadow(0 0 6px ${styleVariants[vr]?.backgroundColor});
      box-sizing: border-box;
      ${base}
    `;
  }

  if (vr === variants.SECONDARY) {
    return `
      border-radius: 0px;
      border: none;
      background-image: linear-gradient(#fff,#fff),linear-gradient(#fff,#fff),linear-gradient(#fff,#fff),linear-gradient(#fff,#fff),linear-gradient(to bottom left,transparent calc(50% - 1px),#fff calc(50% - 1px),#fff calc(50% + 1px),transparent calc(50% + 1px)),linear-gradient(to top right,transparent calc(50% - 1px),#fff calc(50% - 1px),#fff calc(50% + 1px),transparent calc(50% + 1px));
      background-size: 2px calc(100% - 8px),2px 100%,100% 2px,100% 2px,9px 9px,9px 9px;
      background-position: 0 0,100% 8px,-8px 0,8px 100%,100% 0,0 100%;
      filter: drop-shadow(0 0 6px ${styleVariants[vr]?.backgroundColor});
      transition: 0.3s linear;
      background-repeat: no-repeat;
      background-color: transparent;
      box-shadow: none;
      box-sizing: border-box;
      ${base}
    `;
  }

  return ``;
};

/**
 * This is to get around an issue where if you use a Link component
 * React will throw a invalid DOM attribute error
 * @see https://github.com/styled-components/styled-components/issues/135
 */

const getOpacity = ({ $isLoading = false }: TransientButtonProps) => {
  return $isLoading ? ".5" : "1";
};

const StyledButton = styled.button<BaseButtonProps>`
  align-items: center;
  border: none;
  border-radius: 16px;
  box-shadow: 0px -1px 0px 0px rgba(14, 14, 44, 0.4) inset;
  cursor: pointer;
  display: flex;
  font-family: inherit;
  font-size: 16px;
  font-weight: 600;
  justify-content: center;
  letter-spacing: 0.03em;
  line-height: 1;
  opacity: ${getOpacity};
  outline: 0;
  transition: background-color 0.2s, opacity 0.2s;

  &:active:not(:disabled):not(.pancake-button--disabled):not(.pancake-button--disabled) {
    opacity: 0.85;
    transform: translateY(1px);
    box-shadow: none;
  }
  ${getDisabledStyles}
  ${variant({
    prop: "scale",
    variants: scaleVariants,
  })}
  ${variant({
    variants: styleVariants,
  })}
  ${getVariantStyles}
  ${layout}
  ${space}
`;

// const StyledButton = styled.button<BaseButtonProps>`
//   position: relative;
//   border: none;
//   align-items: center;
//   cursor: pointer;
//   display: flex;
//   font-family: inherit;
//   font-size: 16px;
//   font-weight: 600;
//   justify-content: center;
//   letter-spacing: 0.03em;
//   line-height: 1;
//   opacity: ${getOpacity};
//   outline: 0;
//   transition: background-color 0.2s, opacity 0.2s;

//   &:active:not(:disabled):not(.pancake-button--disabled):not(.pancake-button--disabled) {
//     opacity: 0.85;
//     transform: translateY(1px);
//     box-shadow: none;
//   }

//   &:hover,
//   &:active {
//     filter: drop-shadow(0 0 12px ${styleVariants[vr]?.backgroundColor});
//     &:before {
//       transform: translateY(-2px);
//       opacity: 1;
//     }
//     &:after {
//       transform: matrix(-1, 0, 0, 1, 0, 0) translateY(2px);
//       opacity: 1;
//     }
//   }

//   &:before,
//   &:after {
//     content: '';
//     height: 3px;
//     width: 32px;
//     opacity: 0;
//     background-size: auto 100%;
//     transition: 0.3s linear;
//     position: absolute;
//     z-index: 20;
//     background-repeat: no-repeat;
//     background-image: ${({ variant: vr = variants.PRIMARY }) => styleVariants[vr]?.backgroundHover};
//   }
//   &:before {
//     top: -2px;
//     opacity: 0;
//     left: 2px;
//     background-position: top 0 center;
//   }
//   &:after {
//     bottom: -2px;
//     right: 2px;
//     background-position: bottom 0 center;
//     transform: matrix(-1, 0, 0, 1, 0, 0);
//   }
//   ${getVariantStyles}
//   ${getDisabledStyles}
//   ${variant({
//     prop: "scale",
//     variants: scaleVariants,
//   })}
//   color: ${({ variant: vr = variants.PRIMARY }) => styleVariants[vr].color};
//   ${layout}
//   ${space}
// `;

export default StyledButton;
