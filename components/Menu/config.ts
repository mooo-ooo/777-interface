import { MenuEntry } from './types';
import { ContextApi } from 'contexts/Localization/types';

const config: (t: ContextApi['t']) => MenuEntry[] = (t) => [
    {
        label: t('Home'),
        icon: 'home',
        href: '/',
    },
    {
        label: t('Slots'),
        icon: 'slots',
        href: '/slots',
    },
    {
        label: t('Live Casino'),
        icon: 'casino',
        href: '/casino',
    },
    {
        label: t('Sportsbook'),
        icon: 'sportsbook',
        href: '/sportsbook',
    },
    {
        label: t('E-Sports'),
        icon: 'esports',
        href: '/esports',
    },
];

export const subMenu: (t: ContextApi['t']) => MenuEntry[] = (t) => [
    {
        label: t('Promotions'),
        icon: 'promotions',
        href: '/promotions',
    },
    {
        label: t('Shop'),
        icon: 'shop',
        href: '/shop',
    },
    {
        label: t('VIP Levels'),
        icon: 'vip_levels',
        href: '/vip-levels',
    },
    {
        label: t('FAQ'),
        icon: 'faq',
        href: '/faq',
    },
];

export default config;

export const MENU_HEIGHT = 68;
export const MENU_ENTRY_HEIGHT = 40;
export const SIDEBAR_WIDTH_FULL = 200;
export const SIDEBAR_WIDTH_REDUCED = 64;
