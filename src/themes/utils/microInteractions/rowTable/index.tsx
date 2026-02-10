import { Theme } from '@mui/material/styles';

export const rowTableMicroInteraction = (theme: Theme) => ({
    transition: theme.microInteractions.rowTable.transition,

    '&:hover': {
        backgroundColor: theme.microInteractions.rowTable.hoverBg,
        transform: theme.microInteractions.rowTable.hoverTransform,
        boxShadow: theme.microInteractions.rowTable.hoverBoxShadow
    },
});