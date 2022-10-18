import styled from 'styled-components'

export const StyledCategory = styled.div`
  padding: 0 0 12px;
  margin: 0 0 12px;
  overflow: auto;
  position: relative;
  grid-auto-flow: column;
  display: grid;
  scroll-behavior: smooth;
  grid-gap: 25px;

  ${({ theme }) => theme.mediaQueries.md} {
    grid-gap: 16px;
  }

  ${({ theme }) => theme.mediaQueries.lg} {
    grid-gap: 32px;
  }

  .category-box {
    min-width: 72px;
    width: 72px;
    cursor: pointer;

    ${({ theme }) => theme.mediaQueries.md} {
      min-width: 100px;
      width: 100px;
    }

    h4 {
      font-size: 12px;
      text-align: center;
      padding-top: 5px;
      color: rgba(255, 255, 255, var(--tw-text-opacity));
      text-transform: uppercase;
      font-weight: 900;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }

    &_inactive {
      display: block;
    }
    &_active {
      display: none;
    }

    &:hover {
      &_inactive {
        display: none;
      }
    }
  }
`
