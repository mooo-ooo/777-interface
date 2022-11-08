import { useState, useMemo, useEffect } from 'react'
import { Input } from '@pancakeswap/uikit'
import styled from 'styled-components'
import debounce from 'lodash/debounce'
import { useTranslation } from '@pancakeswap/localization'

const StyledInput = styled.input`
  height: 40px;
  background-color: transparent;
  background-image: linear-gradient(#fff, #fff), linear-gradient(#fff, #fff), linear-gradient(#fff, #fff),
    linear-gradient(#fff, #fff),
    linear-gradient(
      to bottom left,
      transparent 50%,
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
    linear-gradient(transparent, transparent), linear-gradient(transparent, transparent);
  background-size: 1px 100%, 1px calc(100% - 9px), 100% 1px, calc(100% - 9px) 1px, 10px 10px, 10px 10px, 100% 100%,
    100% 100%;
  background-position: 0 -9px, 100% bottom, -9px 0, right 100%, 0 100%, 100% 0, -10px 0, 100% -10px;
  background-repeat: no-repeat;
  padding: 8px 16px;
  width: 100%;
  background-color: transparent;
  color: rgba(255, 255, 255, var(--tw-text-opacity));
  margin-bottom: 20px;
  padding-left: 24px;
  font-size: 16px;
  z-index: 10;

  outline: none;
  border: none;
  box-shadow: none;

  &:focus {
    background-image: linear-gradient(#fff, #fff), linear-gradient(#fff, #fff), linear-gradient(#fff, #fff),
      linear-gradient(#fff, #fff),
      linear-gradient(
        to bottom left,
        transparent 50%,
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
      linear-gradient(transparent, transparent), linear-gradient(transparent, transparent);
  }
`

const InputWrapper = styled.div`
  position: relative;
  ${({ theme }) => theme.mediaQueries.sm} {
    display: block;
  }
`

interface Props {
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  placeholder?: string
  initialValue?: string
}

const InputText: React.FC<React.PropsWithChildren<Props>> = ({
  onChange: onChangeCallback,
  placeholder = 'Amount',
  initialValue,
}) => {
  const [searchText, setSearchText] = useState('')
  const { t } = useTranslation()

  const debouncedOnChange = useMemo(
    () => debounce((e: React.ChangeEvent<HTMLInputElement>) => onChangeCallback(e), 500),
    [onChangeCallback],
  )

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchText(e.target.value)
    debouncedOnChange(e)
  }
  useEffect(() => {
    if (initialValue) {
      setSearchText(initialValue)
    }
  }, [initialValue])

  return (
    <InputWrapper>
      <StyledInput value={searchText} onChange={onChange} placeholder={t(placeholder)} />
    </InputWrapper>
  )
}

export default InputText
