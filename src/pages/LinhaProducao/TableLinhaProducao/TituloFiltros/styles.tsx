import { clickElementMicroInteraction } from "@/themes/utils/microInteractions/clickElement";
import { Button, styled } from "@mui/material";

export const CustomButtonFilter = styled(Button)<{ filtroAtual: boolean }>(({ theme, filtroAtual }) => ({
    textTransform: 'none',
    padding: '8px 16px',
    border: '2px solid #e2e8f0',
    background: 'white',
    borderRadius: '8px',
    fontSize: '14px',
    color: '#4a5568',

    ...(clickElementMicroInteraction(theme)),

    ':active': {
        background: theme.palette.primary.main,
        color: '#fff',
        borderColor: 'transparent',
    },

    ...(filtroAtual && {
        background: theme.palette.primary.main,
        color: '#fff',
        borderColor: 'transparent',
    })
}))