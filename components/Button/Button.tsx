import styled from 'styled-components';
import React, { ElementType } from 'react';
import getExternalLinkProps from 'utils/getExternalLinkProps';
import { Button, Link } from 'rebass';
import { styleVariants } from 'components/Button/theme';
import { ButtonProps, variants, scales } from 'components/Button/types';

const BaseButton = <E extends ElementType = 'button'>(props: ButtonProps<E>): JSX.Element => {
    const { variant, external, className, isLoading, disabled, children, ...rest } = props;
    const internalProps = external ? getExternalLinkProps() : {};
    const isDisabled = isLoading || disabled;
    const classNames = className ? [className] : [];

    if (variant === variants.SECONDARY) {
        return (
            <StyledButtonSecondary>
                <Link
                    $isLoading={isLoading}
                    className={classNames.join(' ')}
                    disabled={isDisabled}
                    {...internalProps}
                    {...rest}
                >
                    {children}
                </Link>
            </StyledButtonSecondary>
        );
    }

    return (
        <StyledButtonPrimary>
            <Button
                $isLoading={isLoading}
                className={classNames.join(' ')}
                disabled={isDisabled}
                {...internalProps}
                {...rest}
            >
                {children}
            </Button>
        </StyledButtonPrimary>
    );
};

const StyledButtonSecondary = styled.div`
    position: relative;
    z-index: 10;
    display: flex;
    align-items: center;
    justify-content: center;
    border-style: none;
    background-color: transparent;
    background-repeat: no-repeat;
    text-transform: capitalize;
    height: 40px;
    padding: 2px;
    font-size: 12px;
    color: ${styleVariants.secondary.color};
    background-image: linear-gradient(#fff, #fff), linear-gradient(#fff, #fff), linear-gradient(#fff, #fff),
        linear-gradient(#fff, #fff),
        linear-gradient(
            to bottom left,
            transparent calc(50% - 1px),
            #fff calc(50% - 1px),
            #fff calc(50% + 1px),
            transparent calc(50% + 1px)
        ),
        linear-gradient(
            to top right,
            transparent calc(50% - 1px),
            #fff calc(50% - 1px),
            #fff calc(50% + 1px),
            transparent calc(50% + 1px)
        );
    background-size: 2px calc(100% - 8px), 2px 100%, 100% 2px, 100% 2px, 9px 9px, 9px 9px;
    background-position: 0 0, 100% 8px, -8px 0, 8px 100%, 100% 0, 0 100%;
    filter: ${styleVariants.secondary.filter};

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
        background-image: ${styleVariants.secondary.backgroundHover};
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
        background-image: linear-gradient(-135deg, transparent 4px, transparent 0),
            linear-gradient(45deg, transparent 4px, transparent 0);
        background-size: 20px 100%, calc(100% - 20px) 100%;
        background-position: right 0 top 50%, left 0 bottom 50%;
        cursor: pointer;

        &:hover,
        &:active {
            background-image: linear-gradient(-135deg, transparent 4px, #fff 0),
                linear-gradient(45deg, transparent 4px, #fff 0);
            background-position: right 0 top 0, left 0 bottom 0;
            color: ${styleVariants.primary.color};
        }
    }
`;

const StyledButtonPrimary = styled.div`
    padding: 0 20px;
    position: relative;
    max-width: max-content;

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
        background-image: ${styleVariants.primary.backgroundHover};
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

    button {
        cursor: pointer;
        position: relative;
        display: flex;
        width: 100%;
        min-width: max-content;
        align-items: center;
        justify-content: center;
        white-space: nowrap;
        text-transform: capitalize;
        height: 40px;
        padding: 0 4px;
        font-size: 12px;
        background-color: ${styleVariants.primary.backgroundColor};
        color: ${styleVariants.primary.color};
        border-radius: 0;
        text-transform: capitalize;
        box-shadow: ${styleVariants.primary.shadow};

        &:hover,
        &:focus {
            outline: none;
            transition: 0.3s linear;

            &:before,
            &:after {
                filter: ${styleVariants.primary.filterHover};
            }
        }

        &:before,
        &:after {
            content: '';
            height: 40px;
            width: 20px;
            background-size: 100% 40px;
            filter: ${styleVariants.primary.filter};
            transition: 0.3s linear;
        }

        &:before {
            position: absolute;
            top: 0px;
            background-repeat: no-repeat;
            left: -19px;
            background-image: ${styleVariants.primary.backgroundBorder};
        }

        &:after {
            position: absolute;
            top: 0px;
            background-repeat: no-repeat;
            right: -19px;
            background-image: ${styleVariants.primary.backgroundBorder};
            transform: rotateZ(180deg);
        }
    }
`;


BaseButton.defaultProps = {
    isLoading: false,
    external: false,
    variant: variants.PRIMARY,
    scale: scales.MD,
    disabled: false,
  };

export default BaseButton;
