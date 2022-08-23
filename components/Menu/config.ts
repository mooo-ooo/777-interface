import { MenuEntry } from './types';
import { ContextApi } from 'contexts/Localization/types';

const config: (t: ContextApi['t']) => MenuEntry[] = (t) => [
    {
        label: t('Home'),
        icon: 'HomeIcon',
        href: '/',
    },
    {
        label: t('Slots'),
        icon: 'SlotsIcon',
        href: '/slots',
    },
    {
        label: t('Live Casino'),
        icon: 'CasinoIcon',
        href: '/casino',
    },
    {
        label: t('Sportsbook'),
        icon: 'SportsbookIcon',
        href: '/sportsbook',
    },
    {
        label: t('E-Sports'),
        icon: 'SportsbookIcon',
        href: '/esports',
    },
];

export default config;

export const MENU_HEIGHT = 68;
export const MENU_ENTRY_HEIGHT = 40;
export const SIDEBAR_WIDTH_FULL = 200;
export const SIDEBAR_WIDTH_REDUCED = 64;
