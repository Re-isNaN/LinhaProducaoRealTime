import { IconButton, TableBody, TableCell, TableRow, Tooltip, Typography } from "@mui/material";
import { useContextDadosLinhaProducao } from "../../contexts/dadosContext";
import dayjs from "dayjs";
import { IconeStatus } from "./IconeStatus";
import { formatTempoDecorrido } from "../../utils";
import { UltimaEtapa } from "./UltimaEtapa";
import { TempoProducao } from "./TempoProducao";
import { useState } from "react";
import { LinhaProducaoAtual } from "../../LinhaProducaoAtual";
import { rowTableMicroInteraction } from "@/themes/utils/microInteractions/rowTable";

export function CustomTableBody() {
    const { dados, selecionarProducao } = useContextDadosLinhaProducao()

    const [openModal, setOpenModal] = useState(false)
    const handleOpenModal = () => { setOpenModal(true) }
    const handleCloseModal = () => { setOpenModal(false) }

    const onClickStatus = (id: number) => {
        handleOpenModal()
        selecionarProducao(id)
    }

    return (
        <>
            <TableBody
                sx={theme => ({
                    '& .MuiTableCell-root': {
                        padding: '18px 20px',
                        color: theme.palette.grey[600],
                        fontSize: '14px'
                    }
                })}
            >
                {dados?.map((row) => (
                    <TableRow
                        key={row.id}
                        sx={theme => ({
                            borderBottom: '1px solid #e2e8f0',
                            ...(rowTableMicroInteraction(theme))
                        })}
                    >
                        <Tooltip title={row.produto}>
                            <TableCell sx={theme => ({ color: theme.palette.text.primary, fontWeight: 600, fontFamily: theme.typography.dataDisplay, fontSize: 13 })}>
                                {dayjs(row.horaInicio).format('DD/MM/YYYY HH:mm')}
                            </TableCell>
                        </Tooltip>

                        <Tooltip title={row.produto}>
                            <TableCell sx={theme => ({ color: theme.palette.text.primary, fontWeight: 600, fontFamily: theme.typography.dataDisplay, fontSize: 13 })}>{row.produto}</TableCell>
                        </Tooltip>

                        <Tooltip title={row.setor}>
                            <TableCell>
                                <Typography
                                    sx={
                                        theme => ({
                                            width: 'fit-content',
                                            boxSizing: 'border-box',
                                            fontSize: '13px',
                                            borderRadius: '6px',
                                            padding: '6px 12px',
                                            fontFamily: theme.typography.dataDisplay,
                                            backgroundColor: theme.palette.link.bgColor!,
                                            color: theme.palette.link.main,
                                            fontWeight: '600'
                                        })
                                    }>
                                    {row.setor || '-'}
                                </Typography>
                            </TableCell>
                        </Tooltip>

                        <Tooltip title={row.etapaAtual}>
                            <UltimaEtapa ultimaEtapa={row.etapaAtual} inicioEtapa={row.inicioEtapa} fimEtapa={row.fimEtapa} />
                        </Tooltip>

                        <Tooltip title={dayjs(row.horaInicio).format('DD/MM/YYYY HH:mm')}>
                            <TableCell>
                                <Typography sx={theme => ({ color: theme.palette.grey[600], fontWeight: 600, fontFamily: theme.typography.dataDisplay, fontSize: 13 })}>
                                    {row.horaInicio ? dayjs(row.horaInicio).format('HH:mm') : '-'}
                                </Typography>

                                <Typography sx={theme => ({ color: theme.palette.grey[400], fontFamily: theme.typography.dataDisplay, fontSize: 13 })}>
                                    {row.horaInicio ? dayjs(row.horaInicio).format('DD/MM/YYYY') : '-'}
                                </Typography>
                            </TableCell>
                        </Tooltip>

                        <Tooltip title={formatTempoDecorrido(row.horaInicio, row.horaFim)}>
                            <TempoProducao produto={row.produto} fim={row.horaFim} inicio={row.horaInicio} status={row.status} />
                        </Tooltip>

                        <Tooltip title={row.qtde + ' un'} sx={theme => ({ color: theme.palette.text.primary, fontWeight: 600 })}>
                            <TableCell><Typography variant="dataDisplay" fontWeight={600} fontSize={13}>{row.qtde || '-'} un</Typography></TableCell>
                        </Tooltip>

                        <Tooltip title={row.status}>
                            <TableCell width={50}>
                                <IconButton onClick={() => onClickStatus(row.id)}>
                                    <IconeStatus status={row.status} />
                                </IconButton>
                            </TableCell>
                        </Tooltip>
                    </TableRow>

                ))}
            </TableBody >

            <LinhaProducaoAtual open={openModal} handleClose={handleCloseModal} />
        </>
    )
}