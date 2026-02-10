import { Card, Table, TableCell, TableHead, TableRow } from '@mui/material'
import { CustomTableBody } from './Body'
import { CustomTableContainer } from '@/components/CustomTable'
import { TituloFiltros } from './TituloFiltros'

export function TableLinhaProducao() {
  return (
    <Card sx={{ width: '100%', display: 'flex', flexDirection: 'column', padding: '34px 32px', gap: '16px', borderRadius: '12px' }}>
      <TituloFiltros />

      <CustomTableContainer>
        <Table stickyHeader>
          <TableHead>
            <TableRow sx={{ textTransform: 'uppercase' }}>
              <TableCell>Emissão</TableCell>
              <TableCell>Produto</TableCell>
              <TableCell>Setor</TableCell>
              <TableCell>Etapa Atual</TableCell>
              <TableCell>Início</TableCell>
              <TableCell>Tempo Decorrido</TableCell>
              <TableCell>Quantidade</TableCell>
              <TableCell>Status</TableCell>
            </TableRow>
          </TableHead>

          <CustomTableBody />
        </Table>
      </CustomTableContainer>
    </Card >
  )
}
