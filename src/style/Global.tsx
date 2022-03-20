import { createGlobalStyle } from 'styled-components'
import { PancakeTheme } from '@pancakeswap/uikit'

declare module 'styled-components' {
  /* eslint-disable @typescript-eslint/no-empty-interface */
  export interface DefaultTheme extends PancakeTheme {}
}

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: "shark";
    src: url("/fonts/BAHNSCHRIFT.TTF");
    font-style: normal;
    font-weight: 400;
    font-display: swap;
  }

  @font-face {
    font-family: "shark-game";
    src: url("/fonts/Corporation Games.otf");
    font-style: normal;
    font-weight: 400;
    font-display: swap;
  }

  * {
    font-family: 'shark', sans-serif;
  }

  body {
    background-color: ${({ theme }) => theme.colors.background};

    img {
      height: auto;
      max-width: 100%;
    }
  }
`

export default GlobalStyle
