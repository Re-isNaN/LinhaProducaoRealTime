import { Box, styled } from "@mui/material"

export const ContainerEtapasLateral = styled(Box)({
    width: '25rem',
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: '#FFF'
})

export const HeaderEtapasLateral = styled(Box)(
    ({ theme }) => ({
        background: `linear-gradient(90deg, ${theme.palette.grey[800]} 0%, ${theme.palette.primary.dark} 80%, ${theme.palette.info.dark} 100%)`,

        display: 'flex',
        flexDirection: 'column',
        padding: '28px 16px',
        gap: '4px'
    })
)

export const BodyEtapasLateral = styled(Box)(({ theme }) =>
({
    padding: '10px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '6px',
    overflowY: 'auto',
    '&::-webkit-scrollbar': {
        width: '8px',
        backgroundColor: theme.palette.info.bgColor,
    },

    '&::-webkit-scrollbar-thumb': {
        backgroundColor: theme.palette.info.main,
        borderRadius: 4,
    },

    '&::-webkit-scrollbar-thumb:hover': {
        backgroundColor: theme.palette.info.dark,
    },
})
)

