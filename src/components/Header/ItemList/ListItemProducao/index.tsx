import { Settings } from '@mui/icons-material'
import { Box, Tooltip } from '@mui/material'
import { Link } from 'react-router-dom'
import { ContainerIcon } from '../styles'

export function ListItemProducao() {
  return (
    <Box
      sx={{ cursor: 'pointer', color: '#FFF', marginTop: 1 }}
      component={Link}
      to="/"
    >
      <Tooltip arrow title="Produção" placement="right">
        <ContainerIcon>
          <Settings />
        </ContainerIcon>
      </Tooltip>
    </Box>
  )
}
