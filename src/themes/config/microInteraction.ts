import { TypeMicroInteractions } from '../types/TypeMicroInteractions';
import { keyframes } from '@emotion/react';
import { palette } from './pallete';

const fadeIn = keyframes({
    from: {
        opacity: 0,
        transform: 'translateY(10px)',
    },
    to: {
        opacity: 1,
        transform: 'translateY(0)',
    },
});


export const microInteractions: TypeMicroInteractions = {
    card: {
        enter: `${fadeIn} 0.5s ease-out backwards`,
        accentColor: palette.info.main,
        accentTransition: 'transform 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
    },

    menuItem: {
        hoverBg: palette.info.main,
        hoverTransform: 'translateX(4px)',
        transition: 'all 0.3s ease',
    },

    rowTable: {
        hoverBg: palette.grey[200],
        hoverTransform: 'scale(1.01)',
        hoverBoxShadow: '0 4px 12px rgba(0, 0, 0, 0.05)',
        transition: 'all 0.2s ease',
    },

    clickElement: {
        hoverCursor: 'pointer',
        hoverColor: palette.info.main,
        transition: 'all 0.3s ease',
    },
}