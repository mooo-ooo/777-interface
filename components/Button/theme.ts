import { scales, variants } from './types';

export const scaleVariants = {
    [scales.MD]: {
        height: '48px',
        padding: '0 24px',
    },
    [scales.SM]: {
        height: '32px',
        padding: '0 16px',
    },
    [scales.XS]: {
        height: '20px',
        fontSize: '12px',
        padding: '0 8px',
    },
};

export const styleVariants: any = {
    [variants.PRIMARY]: {
        backgroundColor: '#00ffc2',
        color: '#151d24',
        colorActive: '#151d24',
        backgroundButton: '#00ffc2',
        backgroundHover: `url("/images/icons/hover_button_primary.svg")`,
        filter: 'drop-shadow(0 0 8px #00FFC2)',
        filterHover: 'drop-shadow(0 0 14px #00FFC2)',
    },
    [variants.SECONDARY]: {
        backgroundColor: '#ffffff',
        color: '#ffffff',
        colorActive: '#151d24',
        backgroundButton: 'transparent',
        backgroundHover: `url("/images/icons/hover_button_secondary.svg")`,
        filter: 'drop-shadow(0 0 14px #fff)',
        filterHover: 'drop-shadow(0 0 14px #fff)',
    },
};
