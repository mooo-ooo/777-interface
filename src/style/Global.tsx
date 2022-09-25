import { createGlobalStyle } from 'styled-components'
import { PancakeTheme } from '@pancakeswap/uikit'

declare module 'styled-components' {
  /* eslint-disable @typescript-eslint/no-empty-interface */
  export interface DefaultTheme extends PancakeTheme {}
}

const GlobalStyle = createGlobalStyle`
  * {
    font-family: 'Exo 2', sans-serif;
  }
  body {
    background-color: ${({ theme }) => theme.colors.background};

    img {
      height: auto;
      max-width: 100%;
    }

    .layer-cover {
      position: relative;
      width: 100%;
      height: auto;

      &:before {
        content: '';
        position: absolute;
        z-index: 2;
        top: -4px;
        right: 0;
        width: 100%;
        height: 10px;
        transform: rotate(180deg);
        background-size: auto;
        background-repeat: no-repeat;
        background-image: url(/images/card/top_fixed.svg);

        ${({ theme }) => theme.mediaQueries.md} {
          top: -9px;
          height: 15px;
          background-size: contain;
        }
      }

      &:after {
        content: '';
        position: absolute;
        bottom: -12px;
        top: auto;
        left: 0;
        height: 18px;
        width: 100%;
        background-size: contain;
        background-repeat: no-repeat;
        background-image: url(/images/card/bottom_fixed.svg);
        z-index: 2;

        ${({ theme }) => theme.mediaQueries.lg} {
          bottom: -20px;
          height: 26px;
        }

        ${({ theme }) => theme.mediaQueries.md} {
          bottom: -14px;
          height: 20px;
        }
      }
    }
  }
`

export default GlobalStyle
