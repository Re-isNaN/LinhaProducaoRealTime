import { useEffect } from 'react'
import { HeaderInformativo } from './HeaderInformativo'
import { TableLinhaProducao } from './TableLinhaProducao'
import { Box } from '@mui/material'
import { useContextDadosLinhaProducao } from './contexts/dadosContext'

export function LinhaProducao() {
  const { dados, prosseguirEtapa } = useContextDadosLinhaProducao()

  useEffect(() => {
    const interval = setInterval(() => {
      const randomId = Math.floor(Math.random() * 5)
      prosseguirEtapa(randomId)
    }, 2000)

    return () => clearInterval(interval)

  }, [dados.length])

  return (
    <Box
      sx={{
        padding: '20px 28px',
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
        gap: '24px',
      }}>
      <HeaderInformativo />
      <TableLinhaProducao />
    </Box>
  )
}
