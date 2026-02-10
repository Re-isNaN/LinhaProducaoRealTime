import { Box, Divider, Typography } from "@mui/material";
import { BodyEtapasLateral, ContainerEtapasLateral, HeaderEtapasLateral } from "./styles";
import { Circle } from "@mui/icons-material";
import { cardMicroInteraction } from "@/themes/utils/microInteractions/card";
import { useContextDadosLinhaProducao } from "../../contexts/dadosContext";
import { statusTheme } from "./utils/statusTheme";
import { formatTempoDecorrido } from "../../utils";

export function EtapasLateral() {
    const { producao } = useContextDadosLinhaProducao()

    return (
        <ContainerEtapasLateral>
            <HeaderEtapasLateral>
                <Typography sx={{ color: '#FFF' }} fontSize={18} fontWeight={600}>Etapas da Produção</Typography>
                <Typography sx={theme => ({ color: theme.palette.grey[300] })} fontSize={14}>Acompanhamento em tempo real</Typography>
            </HeaderEtapasLateral>

            <BodyEtapasLateral>
                {producao?.etapas.map(e => {
                    return (
                        <Box
                            sx={(theme) => ({
                                width: '100%',
                                padding: '10px 12px',
                                border: `solid 1.5px ${theme.palette.grey[300]}`,
                                borderRadius: '9px',
                                display: 'flex',
                                flexDirection: 'column',
                                gap: '18px',
                                ...(cardMicroInteraction(theme))
                            })}
                        >
                            <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', }}>
                                <Typography
                                    sx={{
                                        flex: 1,
                                        fontSize: 16,
                                        fontWeight: 600,
                                        wordBreak: 'break-word',
                                    }}
                                >
                                    {e.etapa}
                                </Typography>

                                {e.etapa !== 'Início' && e.etapa !== 'Fim' && (
                                    <Typography
                                        sx={theme => ({
                                            height: '1.8rem',
                                            fontSize: 12,
                                            fontWeight: 600,
                                            fontFamily: '"JetBrains Mono", monospace',
                                            padding: '4px 10px',
                                            borderRadius: '6px',
                                            backgroundColor: theme.palette.info.bgColor,
                                            color: theme.palette.info.main,
                                        })}
                                    >
                                        {formatTempoDecorrido(e.inicio, e.fim)}
                                    </Typography>
                                )}
                            </Box>

                            {e.etapa !== 'Início' && e.etapa !== 'Fim' && (
                                <>
                                    <Typography
                                        sx={theme => ({
                                            width: 'fit-content',
                                            height: '1.8rem',
                                            fontSize: 12,
                                            fontWeight: 600,
                                            textTransform: 'uppercase',
                                            padding: '14px 8px',
                                            borderRadius: '8px',
                                            backgroundColor: theme.palette[statusTheme(e.status)].bgColor,
                                            color: theme.palette[statusTheme(e.status)].main,
                                            display: 'flex',
                                            flexDirection: 'row',
                                            alignItems: 'center',
                                            gap: 0.5
                                        })}
                                    >
                                        <Circle sx={{ fontSize: 8 }} />
                                        {e.status || 'Em Espera'}
                                    </Typography>

                                    <Divider />

                                    <Box
                                        sx={{
                                            width: '100%',
                                            display: 'flex',
                                            flexDirection: 'row',
                                        }}
                                    >
                                        <Box sx={{ width: '50%' }}>
                                            <Typography fontSize={12} fontWeight={600} color="textDisabled">Início</Typography>
                                            <Typography sx={{ fontSize: 13, fontWeight: 600, fontFamily: '"JetBrains Mono", monospace' }}>
                                                2h 10m
                                            </Typography>
                                        </Box>

                                        <Box sx={{ width: '50%' }}>
                                            <Typography fontSize={12} fontWeight={600} color="textDisabled">Qtde</Typography>
                                            <Typography sx={{ fontSize: 13, fontWeight: 600, fontFamily: '"JetBrains Mono", monospace' }}>
                                                {e.qtde} un
                                            </Typography>
                                        </Box>
                                    </Box>
                                </>
                            )}
                        </Box>
                    )
                }
                )}
            </BodyEtapasLateral>
        </ContainerEtapasLateral>
    )
}