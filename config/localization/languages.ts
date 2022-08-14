import { Language } from 'components/Menu/types'

export const EN: Language = { locale: 'en-US', language: 'English', code: 'en' }
export const ID: Language = { locale: 'id-ID', language: 'Bahasa Indonesia', code: 'id' }


export const languages = {
  'en-US': EN,
  'id-ID': ID,
}

export const languageList = Object.values(languages)
