import { useState, useMemo, useEffect } from 'react'
import { Input } from '@pancakeswap/uikit'
import styled from 'styled-components'
import debounce from 'lodash/debounce'
import { useTranslation } from '@pancakeswap/localization'

const StyledInput = styled.input`
  height: 40px;
  background-color: transparent;
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
  padding: 8px 16px;
  width: 100%;
  background-color: transparent;
  color: rgba(255, 255, 255, var(--tw-text-opacity));
  margin-bottom: 20px;
  padding-left: 38px;
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

  svg {
    position: absolute;
    left: 8px;
    top: 8px;
    width: 24px;
    height: 24px;
  }
`

interface Props {
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  placeholder?: string
  initialValue?: string
}

const SearchInput: React.FC<React.PropsWithChildren<Props>> = ({
  onChange: onChangeCallback,
  placeholder = 'Search',
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
      <svg data-v-4695b75b="" viewBox="0 0 22 22" fill="white" xmlns="http://www.w3.org/2000/svg">
        <path
          data-v-4695b75b=""
          d="M7.32514 13.2872C6.55185 12.2312 6.08932 10.9341 6.08932 9.52796C6.08932 6.00799 8.95326 3.14404 12.4732 3.14404C15.9932 3.14404 18.8571 6.00799 18.8571 9.52796C18.8571 13.0479 15.9932 15.9119 12.4732 15.9119C11.0671 15.9119 9.76986 15.4493 8.71387 14.676L4.53163 18.8582L3.14283 17.4694C3.14283 17.4694 7.32514 13.2872 7.32514 13.2872ZM12.4732 13.9476C14.9103 13.9476 16.8928 11.9651 16.8928 9.52796C16.8928 7.09083 14.9103 5.10834 12.4732 5.10834C10.0361 5.10834 8.05358 7.09083 8.05358 9.52796C8.05358 11.9651 10.0361 13.9476 12.4732 13.9476Z"
        />
      </svg>
      <StyledInput value={searchText} onChange={onChange} placeholder={t(placeholder)} />
    </InputWrapper>
  )
}

export default SearchInput
