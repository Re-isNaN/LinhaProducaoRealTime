import { Box } from '@mui/material'
import { ListItemLogout } from './ListItemLogout'
import { ListItemDashboard } from './ListItemDashboard'
import { ListItemProducao } from './ListItemProducao'
import { ContainerListItem } from './styles'

export function ItemList() {
  return (
    <ContainerListItem>
      <Box mt={2} display="flex" flexDirection="column">
        <ListItemDashboard />
        <ListItemProducao />
      </Box>

      <Box mb={1} display="flex">
        <ListItemLogout />
      </Box>
    </ContainerListItem>
  )
}
