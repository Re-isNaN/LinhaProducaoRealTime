import { btnMenuMicroInteraction } from "@/themes/utils/microInteractions/btnMenu";
import { Box, styled } from "@mui/material";

export const ContainerListItem = styled(Box)(({ theme }) =>
({
    width: '100%',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: theme.palette.primary.light,
})
)

export const ContainerIcon = styled(Box)(({ theme }) =>
({
    height: '2.5rem',
    width: '2.5rem',
    display: 'grid',
    placeItems: 'center',
    color: '#FFF',
    borderRadius: '8px',
    backgroundColor: theme.palette.info.light,
    ...(btnMenuMicroInteraction(theme))
})
)