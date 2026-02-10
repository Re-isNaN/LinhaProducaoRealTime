import { Box, Typography } from "@mui/material"
import { CustomButtonFilter } from "./styles"
import { useState } from "react"

export function TituloFiltros() {
    const [filtroAtual, setFiltroAtual] = useState('Todas')

    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-between',
            }}
        >
            <Typography variant='h2' sx={theme => ({ fontSize: 22, fontWeight: 600, color: theme.palette.grey[700] })}>Produções</Typography>

            <Box sx={{ display: 'flex', flexDirection: 'row', gap: '8px' }}>
                {['Todas', 'Produzindo', 'Concluídas'].map(e => {
                    return (
                        <CustomButtonFilter filtroAtual={e === filtroAtual} onClick={(_ev) => { setFiltroAtual(e) }}>
                            {e}
                        </CustomButtonFilter>
                    )
                })}
            </Box>
        </Box>
    )
}