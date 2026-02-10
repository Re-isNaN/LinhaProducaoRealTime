import { Box, CssBaseline } from '@mui/material'
import { AppBarHeader } from './AppBar'
import { MenuDrawer } from './MenuDrawer'

export function Header() {
  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBarHeader />
      <MenuDrawer />
    </Box>
  )
}
