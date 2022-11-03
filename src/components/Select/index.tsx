import { useState, useEffect } from 'react'
import styled, { css } from 'styled-components'
import { Box, BoxProps, Text } from '@pancakeswap/uikit'

const DropDownHeader = styled.div`
  padding-left: 16px;
  max-width: 90%;
  display: block;
  text-align: left;
  img {
    position: absolute;
    right: 20px;
    bottom: 13px;
  }
`

const DropDownListContainer = styled.div`
  min-width: 136px;
  height: 0;
  position: absolute;
  overflow: hidden;
  z-index: ${({ theme }) => theme.zIndices.dropdown};
  transition: transform 0.15s, opacity 0.15s;
  transform: scaleY(0);
  transform-origin: top;
  opacity: 0;
  width: 100%;
  margin-top: 7px;

  ${({ theme }) => theme.mediaQueries.sm} {
    min-width: 168px;
  }
`

const DropDownContainer = styled(Box)<{ isOpen: boolean }>`
  background-image: linear-gradient(hsla(0, 0%, 100%, 0.5), hsla(0, 0%, 100%, 0.5)),
    linear-gradient(hsla(0, 0%, 100%, 0.5), hsla(0, 0%, 100%, 0.5)),
    linear-gradient(hsla(0, 0%, 100%, 0.5), hsla(0, 0%, 100%, 0.5)),
    linear-gradient(hsla(0, 0%, 100%, 0.5), hsla(0, 0%, 100%, 0.5)),
    linear-gradient(
      to bottom left,
      transparent 50%,
      hsla(0, 0%, 100%, 0.5) calc(50% - 1px),
      hsla(0, 0%, 100%, 0.5) calc(50% + 1px),
      transparent calc(50% + 1px)
    ),
    linear-gradient(
      to top right,
      transparent calc(50% - 1px),
      hsla(0, 0%, 100%, 0.5) 50%,
      hsla(0, 0%, 100%, 0.5) calc(50% + 1px),
      transparent calc(50% + 1px)
    ),
    linear-gradient(transparent, transparent), linear-gradient(transparent, transparent);
  background-size: 1px 100%, 1px calc(100% - 9px), 100% 1px, calc(100% - 9px) 1px, 10px 10px, 10px 10px, 100% 100%,
    100% 100%;
  background-position: 0 -9px, 100% bottom, -9px 0, right 100%, 0 100%, 100% 0, -10px 0, 100% -10px;
  background-repeat: no-repeat;
  padding: 8px 0;
  height: 40px;
  font-size: 14px;
  cursor: pointer;
  width: 100%;
  position: relative;
  color: rgba(255, 255, 255, var(--tw-text-opacity));
  font-weight: 600;
  z-index: 10;

  ${({ theme }) => theme.mediaQueries.sm} {
    min-width: 168px;
  }

  ${(props) =>
    props.isOpen &&
    css`
      background-image: linear-gradient(#fff, #fff), linear-gradient(#fff, #fff), linear-gradient(#fff, #fff),
      linear-gradient(#fff, #fff),
      linear-gradient(
        to bottom left,
        transparent 100%,
        #fff calc(50% - 1px),
        #fff calc(50% + 1px),
        transparent calc(50% + 1px)
      ),
      linear-gradient(
        to top right,
        transparent calc(50% - 1px),
        #fff 50%,
        #fff calc(50% + 1px),
        transparent calc(50% + 1px)
      ),
      linear-gradient(transparent, transparent), linear-gradient(transparent, transparent) ;
      background-position: 0 100%, 100% bottom, -9px 0, right 100%, 0 100%, 100% 0, -10px 0, 100% -10px;

      ${DropDownHeader} {
        border-bottom: 1px solid transparent};
      }

      ${DropDownListContainer} {
        height: 240px;
        transform: scaleY(1);
        opacity: 1;
        border-top-width: 0;
        box-shadow: ${({ theme }) => theme.tooltip.boxShadow};
        background-image: linear-gradient(#fff, #fff), linear-gradient(#fff, #fff),
          linear-gradient(transparent, transparent), linear-gradient(#fff, #fff),
          linear-gradient(
            to bottom left,
            transparent 50%,
            #fff calc(50% - 1px),
            #fff calc(50% + 1px),
            transparent calc(50% + 1px)
          ),
          linear-gradient(#161d24, #161d24), linear-gradient(#161d24, #161d24);
        background-size: 1px calc(100% - 9px), 1px 100%, 100% 1px, calc(100% - 9px) 1px, 10px 10px, 100% 100%, 100% 100%;
        background-position: 0 0, 100% 0, 0 0, right 100%, 0 100%, -9px 0, 100% 0;
        background-repeat: no-repeat;

        padding: 6px 0 13px;
        overflow: auto;
      }

      img {
        transform: rotate(180deg);
      }
    `}
`

const DropDownList = styled.ul`
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  z-index: ${({ theme }) => theme.zIndices.dropdown};
`

const ListItem = styled.li`
  list-style: none;
  padding: 8px 16px;
  &:hover {
    color: #fff;
  }
`

export interface SelectProps extends BoxProps {
  options: OptionProps[]
  onOptionChange?: (option: OptionProps) => void
  placeHolderText?: string
  defaultOptionIndex?: number
}

export interface OptionProps {
  label: string
  value: any
}

const Select: React.FunctionComponent<React.PropsWithChildren<SelectProps>> = ({
  options,
  onOptionChange,
  defaultOptionIndex = 0,
  placeHolderText,
  ...props
}) => {
  const [isOpen, setIsOpen] = useState(false)
  const [optionSelected, setOptionSelected] = useState(false)
  const [selectedOptionIndex, setSelectedOptionIndex] = useState(defaultOptionIndex)

  const toggling = (event: React.MouseEvent<HTMLDivElement>) => {
    setIsOpen(!isOpen)
    event.stopPropagation()
  }

  const onOptionClicked = (selectedIndex: number) => () => {
    setSelectedOptionIndex(selectedIndex)
    setIsOpen(false)
    setOptionSelected(true)

    if (onOptionChange) {
      onOptionChange(options[selectedIndex])
    }
  }

  useEffect(() => {
    const handleClickOutside = () => {
      setIsOpen(false)
    }

    document.addEventListener('click', handleClickOutside)
    return () => {
      document.removeEventListener('click', handleClickOutside)
    }
  }, [])

  useEffect(() => {
    if (defaultOptionIndex) {
      setSelectedOptionIndex(defaultOptionIndex - 1)
      setOptionSelected(true)
    }
  }, [defaultOptionIndex])

  return (
    <DropDownContainer isOpen={isOpen} {...props}>
      <div aria-hidden="true" onClick={toggling}>
        <DropDownHeader>
          <Text color={!optionSelected && placeHolderText ? 'text' : undefined}>
            {!optionSelected && placeHolderText ? placeHolderText : options[selectedOptionIndex].label}
          </Text>
          <img src="/images/home/arrow_faq.svg" alt="Arrow" />
        </DropDownHeader>
      </div>
      {/* <ArrowDropDownIcon color="text" onClick={toggling} /> */}
      <DropDownListContainer>
        <DropDownList>
          {options.map((option, index) =>
            placeHolderText || index !== selectedOptionIndex ? (
              <ListItem onClick={onOptionClicked(index)} key={option.label}>
                <Text>{option.label}</Text>
              </ListItem>
            ) : null,
          )}
        </DropDownList>
      </DropDownListContainer>
    </DropDownContainer>
  )
}

export default Select
