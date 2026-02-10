import { Theme } from '@mui/material/styles';

export const cardMicroInteraction = (theme: Theme) => ({
    position: 'relative',
    animation: theme.microInteractions.card.enter,

    '&::before': {
        content: '""',
        position: 'absolute',
        top: 0,
        left: 0,
        width: 4,
        height: '100%',
        backgroundColor: theme.microInteractions.card.accentColor,
        transform: 'scaleY(0)',
        transformOrigin: 'top',
        transition: theme.microInteractions.card.accentTransition,
    },

    '&:hover::before': {
        transform: 'scaleY(1)',
    },

    '&:hover': {
        border: `2px solid ${theme.microInteractions.card.accentColor}`,
    },
});
