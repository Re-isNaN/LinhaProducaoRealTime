import { Popover, TableCell, Typography } from "@mui/material";
import dayjs from "dayjs";
import React, { useState } from "react";
import { formatTempoDecorrido } from "../../../utils";
import { IPropsTempoProducao } from "./type";
import { clickElementMicroInteraction } from "@/themes/utils/microInteractions/clickElement";

export function TempoProducao({ produto, inicio, fim, status }: IPropsTempoProducao) {
    const [anchorEl, setAnchorEl] = useState<HTMLTableCellElement | null>(null);

    const handleClick = (event: React.MouseEvent<HTMLTableCellElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const open = Boolean(anchorEl);
    const id = open ? 'simple-popover' : undefined;

    return (
        <>
            <TableCell onClick={handleClick} sx={theme => clickElementMicroInteraction(theme)}>
                <Typography sx={theme => ({ color: theme.palette.grey[600], fontWeight: 600, fontSize: 13, fontFamily: theme.typography.dataDisplay })}>
                    {formatTempoDecorrido(inicio, fim)}
                </Typography>
                <Typography
                    sx={theme =>
                    ({
                        fontFamily: theme.typography.dataDisplay,
                        color: status === 'CONCLUÍDA' ? theme.palette.success.main :
                            status === 'PRODUZINDO' ? theme.palette.info.main :
                                status === 'PARADA' ? theme.palette.warning.main :
                                    status === 'CANCELADA' ? theme.palette.error.main :
                                        theme.palette.grey[400],
                        fontSize: '12px'
                    })
                    }
                >
                    {status}
                </Typography>
            </TableCell >
            <Popover
                id={id}
                open={open}
                anchorEl={anchorEl}
                onClose={handleClose}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'left',
                }}
            >
                <Typography fontSize={18} fontWeight={600} sx={{ p: 2 }}>{produto}</Typography>
                <Typography sx={{ px: 2 }}>Início: {inicio ? dayjs(inicio).format('DD/MM/YYYY HH:mm') : '-'}</Typography>
                <Typography sx={{ px: 2 }}>Fim: {fim ? dayjs(fim).format('DD/MM/YYYY HH:mm') : '-'}</Typography>
                <Typography sx={{ px: 2, pb: 2 }}>Tempo decorrido: {formatTempoDecorrido(inicio, fim)}</Typography>
            </Popover>
        </>
    )
}