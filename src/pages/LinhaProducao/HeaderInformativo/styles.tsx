import { Box, styled } from "@mui/material";

export const BackgroundIcon = styled(Box)<{ back?: 'error' | 'alert' }>(
    ({ theme, back }) => ({
        position: 'absolute',
        right: 40,
        top: 40,

        height: '3rem',
        width: '3rem',

        display: 'grid',
        placeItems: 'center',

        backgroundColor: theme.palette[back || 'info'].bgColor,
        borderRadius: '12px'
    })
)