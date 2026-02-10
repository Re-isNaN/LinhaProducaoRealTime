import { Toolbar, Typography } from '@mui/material'
import { AppBarComponent } from './styles'

export function AppBarHeader() {

  return (
    <AppBarComponent position="fixed">
      <Toolbar>
        <Typography
          color="primary.contrastText"
          variant="h6"
          fontWeight={600}
        >
          Linha de Produção
        </Typography>
      </Toolbar>
    </AppBarComponent>
  )
}
