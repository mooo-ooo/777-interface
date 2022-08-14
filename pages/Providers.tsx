import React from 'react'
import ThemeProvider from 'contexts/ThemeContext'
import { LanguageProvider } from 'contexts/Localization'

const Providers: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <ThemeProvider>
      <LanguageProvider>
        {children}
      </LanguageProvider>
    </ThemeProvider>
  )
}

export default Providers
