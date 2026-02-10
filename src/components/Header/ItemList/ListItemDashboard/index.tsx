import { Dashboard } from '@mui/icons-material'
import { Box, Tooltip } from '@mui/material'
import { Link } from 'react-router-dom'
import { ContainerIcon } from '../styles'

export function ListItemDashboard() {
  return (
    <Box
      sx={{ cursor: 'pointer', color: '#FFF' }}
      component={Link}
      to="/"
    >
      <Tooltip arrow title="Dashboard" placement="right">
        <ContainerIcon>
          <Dashboard />
        </ContainerIcon>
      </Tooltip>
    </Box>
  )
}
