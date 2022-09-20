import { ElementType } from 'react'
import styled from 'styled-components'
import EXTERNAL_LINK_PROPS from 'utils/externalLinkProps'
import { styleVariants } from 'components/Button/theme'
import { ButtonProps, variants, scales } from 'components/Button/types'
import { Link } from '../Links'

const BaseButton = <E extends ElementType = 'button'>(props: ButtonProps<E>): JSX.Element => {
  const { variant = 'primary', external, className, isLoading, disabled, children, ...rest } = props
  const internalProps = external ? EXTERNAL_LINK_PROPS : {}
  const isDisabled = isLoading || disabled
  const classNames = className ? [className] : []

  return (
    <StyledButton variant={variant}>
      <Link $isLoading={isLoading} className={classNames.join(' ')} disabled={isDisabled} {...internalProps} {...rest}>
        {children}
      </Link>
    </StyledButton>
  )
}

const StyledButton = styled.div<{ variant: string }>`
  position: relative;
  z-index: 10;
  display: flex;
  align-items: center;
  justify-content: center;
  border-style: none;
  font-weight: bold;
  background-color: transparent;
  background-repeat: no-repeat;
  text-transform: capitalize;
  height: 40px;
  padding: 2px;
  font-size: 12px;
  color: ${({ variant }) => styleVariants[variant].color};
  background-image: linear-gradient(
      ${({ variant }) => styleVariants[variant].backgroundColor},
      ${({ variant }) => styleVariants[variant].backgroundColor}
    ),
    linear-gradient(
      ${({ variant }) => styleVariants[variant].backgroundColor},
      ${({ variant }) => styleVariants[variant].backgroundColor}
    ),
    linear-gradient(
      ${({ variant }) => styleVariants[variant].backgroundColor},
      ${({ variant }) => styleVariants[variant].backgroundColor}
    ),
    linear-gradient(
      ${({ variant }) => styleVariants[variant].backgroundColor},
      ${({ variant }) => styleVariants[variant].backgroundColor}
    ),
    linear-gradient(
      to bottom left,
      transparent calc(50% - 1px),
      ${({ variant }) => styleVariants[variant].backgroundColor} calc(50% - 1px),
      ${({ variant }) => styleVariants[variant].backgroundColor} calc(50% + 1px),
      transparent calc(50% + 1px)
    ),
    linear-gradient(
      to top right,
      transparent calc(50% - 1px),
      ${({ variant }) => styleVariants[variant].backgroundColor} calc(50% - 1px),
      ${({ variant }) => styleVariants[variant].backgroundColor} calc(50% + 1px),
      transparent calc(50% + 1px)
    );
  background-size: 2px calc(100% - 8px), 2px 100%, 100% 2px, 100% 2px, 9px 9px, 9px 9px;
  background-position: 0 0, 100% 8px, -8px 0, 8px 100%, 100% 0, 0 100%;
  filter: ${({ variant }) => styleVariants[variant].filter};
  transition: 0.3s linear;

  &:hover,
  &:active {
    &:before {
      transform: translateY(-6px);
      opacity: 1;
    }
    &:after {
      transform: matrix(-1, 0, 0, 1, 0, 0) translateY(6px);
      opacity: 1;
    }
    filter: ${({ variant }) => styleVariants[variant].filterHover};
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
    background-image: ${({ variant }) => styleVariants[variant].backgroundHover};
  }
  &:before {
    top: 0px;
    opacity: 0;
    left: 2px;
    background-position: top 0 center;
  }
  &:after {
    bottom: 0;
    right: 2px;
    background-position: bottom 0 center;
    transform: matrix(-1, 0, 0, 1, 0, 0);
  }

  a {
    position: relative;
    z-index: 0;
    display: flex;
    height: 100%;
    width: 100%;
    align-items: center;
    justify-content: center;
    background-repeat: no-repeat;
    transition-duration: 300ms;
    transition-timing-function: linear;
    padding: 0 18px;
    background-image: linear-gradient(
        -135deg,
        transparent 4px,
        ${({ variant }) => styleVariants[variant].backgroundButton} 0
      ),
      linear-gradient(45deg, transparent 4px, ${({ variant }) => styleVariants[variant].backgroundButton} 0);
    background-size: 20px 100%, calc(100% - 20px) 100%;
    background-position: right 0 top 50%, left 0 bottom 50%;
    cursor: pointer;
    color: ${({ variant }) => styleVariants[variant].color};
    border-radius: 0;
    text-transform: capitalize;

    &:hover,
    &:active {
      background-image: linear-gradient(
          -135deg,
          transparent 4px,
          ${({ variant }) => styleVariants[variant].backgroundColor} 0
        ),
        linear-gradient(45deg, transparent 4px, ${({ variant }) => styleVariants[variant].backgroundColor} 0);
      background-position: right 0 top 0, left 0 bottom 0;
      color: ${({ variant }) => styleVariants[variant].colorActive};
    }
  }
`

BaseButton.defaultProps = {
  isLoading: false,
  external: false,
  variant: variants.PRIMARY,
  scale: scales.MD,
  disabled: false,
}

export default BaseButton
