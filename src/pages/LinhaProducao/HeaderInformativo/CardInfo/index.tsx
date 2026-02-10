import { cardMicroInteraction } from "@/themes/utils/microInteractions/card";
import { percentFormatter } from "@/utils/formatters";
import { Card, Divider, Typography } from "@mui/material";
import { ReactNode } from "react";

export function CardInfo({ info }: { info: { total: number, titulo: string, legenda: string, icone: ReactNode, format: 'un' | 'percent' } }) {
    return (
        <Card
            sx={theme => ({
                width: '100%',
                padding: '20px 12px',
                borderRadius: '12px',

                display: 'flex',
                flexDirection: 'column',
                gap: 1,

                ...(cardMicroInteraction(theme)),
            })}
        >
            <Typography textTransform='uppercase' variant="dataDisplay" fontSize={14} color="textDisabled">{info.titulo}</Typography>

            <Typography fontSize={28} variant="dataDisplay" fontWeight={600}>{info.format === 'un' ? info.total : percentFormatter.format(info.total)}</Typography>

            {info.icone}

            <Divider />

            <Typography variant="dataDisplay" fontSize={12} color="textDisabled">{info.legenda}</Typography>
        </Card>
    )
}