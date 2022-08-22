import { Language } from 'components/Menu/types';

export const EN: Language = { locale: 'en-US', language: 'English', code: 'en' };
export const TH: Language = { locale: 'th-TH', language: 'ไทย', code: 'th' };

export const languages = {
    'en-US': EN,
    'th-TH': TH,
};

export const languageList = Object.values(languages);
