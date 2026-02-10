import { Theme } from '@mui/material/styles';

export const clickElementMicroInteraction = (theme: Theme) => ({
    transition: theme.microInteractions.clickElement.transition,
    ':hover': {
        cursor: theme.microInteractions.clickElement.hoverCursor,
        borderColor: theme.microInteractions.clickElement.hoverColor,
        color: theme.microInteractions.clickElement.hoverColor,
    },
});