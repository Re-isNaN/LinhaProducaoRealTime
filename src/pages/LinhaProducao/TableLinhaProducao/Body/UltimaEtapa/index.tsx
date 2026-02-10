import { Popover, TableCell, Typography } from "@mui/material";
import dayjs from "dayjs";
import React, { useState } from "react";
import { formatTempoDecorrido } from "../../../utils";
import { IPropsUltimaEtapa } from "./type";
import { clickElementMicroInteraction } from "@/themes/utils/microInteractions/clickElement";

export function UltimaEtapa({ ultimaEtapa, inicioEtapa, fimEtapa }: IPropsUltimaEtapa) {
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
            <TableCell onClick={handleClick} sx={(theme) => clickElementMicroInteraction(theme)}>
                <Typography sx={theme => ({
                    width: 'fit-content',
                    boxSizing: 'border-box',
                    fontSize: '13px',
                    borderRadius: '6px',
                    padding: '6px 12px',
                    fontFamily: theme.typography.dataDisplay,
                    backgroundColor: theme.palette.info.bgColor!,
                    color: theme.palette.primary.main,
                    fontWeight: '600',

                })}>
                    {ultimaEtapa || '-'}
                </Typography>
            </TableCell>
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
                <Typography fontSize={18} fontWeight={600} sx={{ p: 2 }}>{ultimaEtapa}</Typography>
                <Typography sx={{ px: 2 }}>Início: {inicioEtapa ? dayjs(inicioEtapa).format('DD/MM/YYYY HH:mm') : '-'}</Typography>
                <Typography sx={{ px: 2 }}>Fim: {fimEtapa ? dayjs(fimEtapa).format('DD/MM/YYYY HH:mm') : '-'}</Typography>
                <Typography sx={{ px: 2, pb: 2 }}>Tempo decorrido: {formatTempoDecorrido(inicioEtapa, fimEtapa)}</Typography>
            </Popover>
        </>
    )
}