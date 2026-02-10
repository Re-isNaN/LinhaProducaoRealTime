import { Logout } from '@mui/icons-material'
import { ListItem, Tooltip } from '@mui/material'
import { ContainerIcon } from '../styles'

export function ListItemLogout() {
  async function onLogout() {
    try {
      console.log('logout')
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <ListItem sx={{ cursor: 'pointer', color: '#FFF' }} onClick={() => onLogout()}>
      <Tooltip arrow title="Sair do Sistema" placement="right">
        <ContainerIcon>
          <Logout />
        </ContainerIcon>
      </Tooltip>
    </ListItem>
  )
}
