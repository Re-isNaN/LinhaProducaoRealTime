import { styled } from "@mui/material";

export const PositionContainer = styled('div')(
    ({ labelX, labelY }: { labelX: number, labelY: number }) => ({
        position: 'absolute',
        transform: `translate(-50%, -50%) translate(${labelX}px,${labelY}px)`,
        pointerEvents: 'all',
        display: 'flex',
        gap: '8px',
        flexDirection: 'column',
        alignItems: 'center'
    })
)
