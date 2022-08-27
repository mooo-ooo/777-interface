import React from 'react'
import { Web3ReactProvider } from '@web3-react/core'
import { getLibrary } from 'utils/web3React'
import ThemeProvider from 'contexts/ThemeContext'
import { LanguageProvider } from 'contexts/Localization/Provider'
import ModalProvider from 'widgets/Modal/ModalContext'

const Providers: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <Web3ReactProvider getLibrary={getLibrary}>
      <ThemeProvider>
        <LanguageProvider>
          <ModalProvider>
            {children}
          </ModalProvider>
        </LanguageProvider>
      </ThemeProvider>
    </Web3ReactProvider>
    
  )
}

export default Providers
