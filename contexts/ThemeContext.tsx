import React, { useMemo } from 'react'
import { css, ThemeProvider } from 'styled-components'

export const breakpointMap = {
  xs: 370,
  sm: 576,
  md: 852,
  lg: 968,
  xl: 1080,
  xxl: 1200,
}

const ThemeContextProvider = ({ children }: { children: React.ReactNode }) => {
  const mediaQueriesTemplates = {
    xs: `@media screen and (min-width: ${breakpointMap.xs}px)`,
    sm: `@media screen and (min-width: ${breakpointMap.sm}px)`,
    md: `@media screen and (min-width: ${breakpointMap.md}px)`,
    lg: `@media screen and (min-width: ${breakpointMap.lg}px)`,
    xl: `@media screen and (min-width: ${breakpointMap.xl}px)`,
    xxl: `@media screen and (min-width: ${breakpointMap.xxl}px)`,
  };
  const themeObject = useMemo(() =>  {
    return {
      grids: {
        sm: 8,
        md: 12,
        lg: 24,
      },
  
      // media queries
      mediaQueries: mediaQueriesTemplates,

      colors: {
        failure: "#ED4B9E",
        primary: "#1FC7D4",
        primaryBright: "#53DEE9",
        primaryDark: "#0098A1",
        secondary: "#7645D9",
        success: "#31D0AA",
        warning: "#FFB237",
      }
    }
  }, [])

  return (
    <ThemeProvider theme={themeObject}>{children}</ThemeProvider>
  )
}

export default ThemeContextProvider