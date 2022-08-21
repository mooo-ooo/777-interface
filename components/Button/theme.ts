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

export const styleVariants = {
    [variants.PRIMARY]: {
        backgroundColor: '#00ffc2',
        color: '#151d24',
        shadow: '0 0 12px #00ffc2',
        backgroundBorder: `url("/images/icons/border_button_primary.svg")`,
        backgroundHover: `url("/images/icons/hover_button_primary.svg")`,
        filter: 'drop-shadow(0 0 6px #00FFC2)',
        filterHover: 'drop-shadow(0 0 14px #00FFC2)',
    },
    [variants.SECONDARY]: {
        backgroundColor: '#00ffc2',
        color: '#fff',
        backgroundHover: `url("/images/icons/hover_button_secondary.svg")`,
        filter: 'drop-shadow(0 0 32px #fff)',
    },
};
