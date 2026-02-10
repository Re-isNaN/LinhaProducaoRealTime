import { Theme } from '@mui/material/styles';

export const btnMenuMicroInteraction = (theme: Theme) => ({
    transition: theme.microInteractions.menuItem.transition,

    '&:hover': {
        backgroundColor: theme.microInteractions.menuItem.hoverBg,
        transform: theme.microInteractions.menuItem.hoverTransform,
    },
});