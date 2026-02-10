import { Box, useTheme } from "@mui/material";
import { CardInfo } from "./CardInfo";
import { IconCaixaColorida } from "@/components/icones/svg/CaixaColorida";
import { IconRaio } from "@/components/icones/svg/Raio";
import { Check } from "@mui/icons-material";
import { useContextDadosLinhaProducao } from "../contexts/dadosContext";
import { useMemo } from "react";
import { IconeEficiencia } from "./IconeEficiencia";
import { BackgroundIcon } from "./styles";

export function HeaderInformativo() {
    const theme = useTheme()

    const { dados: producoes } = useContextDadosLinhaProducao()

    const [total, produzindo, concluidas, eficiencia] = useMemo(() => {
        let total = 0
        let produzindo = 0
        let concluidas = 0

        for (const prod of producoes) {
            total++
            if (prod.status === 'PRODUZINDO') { produzindo++ }
            if (prod.status === 'CONCLUÍDA') { concluidas++ }
        }

        const eficiencia = concluidas / total

        return [total, produzindo, concluidas, eficiencia]
    }, [producoes])

    const dados = [
        { total: total, titulo: 'Total de Produções', legenda: 'Todas as produções', icone: <BackgroundIcon><IconCaixaColorida height={24} width={24} /></BackgroundIcon>, format: 'un' },
        { total: produzindo, titulo: 'Em Produção', legenda: 'Processos em andamento', icone: <BackgroundIcon><IconRaio height={20} width={20} color={theme.palette.alert.main} /></BackgroundIcon>, format: 'un' },
        { total: concluidas, titulo: 'Concluídas Hoje', legenda: 'Finalizadas nas últimas 24h', icone: <BackgroundIcon><Check color="success" /></BackgroundIcon>, format: 'un' },
        { total: eficiencia, titulo: 'Eficiência', legenda: 'Taxa de sucesso em geral', icone: <IconeEficiencia eficiencia={eficiencia} />, format: 'percent' }
    ] as const

    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-between',
                gap: '12px'
            }}
        >
            {dados.map(info => <CardInfo info={info} />)}
        </Box>
    )
}