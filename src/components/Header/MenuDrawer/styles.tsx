import { styled, Drawer as MUIDrawer } from '@mui/material'

export const DrawerComponent = styled(MUIDrawer)(({ theme }) => ({
  flexShrink: 0,
  whiteSpace: 'nowrap',
  boxSizing: 'border-box',

  overflowX: 'hidden',
  width: `calc(${theme.spacing(7)} + 1px)`,
  '& .MuiDrawer-paper': {
    width: `calc(${theme.spacing(7)} + 1px)`,
    margin: '3.5rem 0',
    paddingBottom: '2rem'
  },
}))
