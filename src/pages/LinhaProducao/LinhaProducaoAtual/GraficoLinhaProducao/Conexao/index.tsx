import { BaseEdge, EdgeLabelRenderer, getBezierPath } from "@xyflow/react";
import { /*Container,*/ PositionContainer } from "./styles";
// import { Typography } from "@mui/material";

export function Conexao({
    sourceX,
    sourceY,
    targetX,
    targetY,
    sourcePosition,
    targetPosition,
    markerEnd,
}) {
    const [edgePath, labelX, labelY] = getBezierPath({
        sourceX,
        sourceY,
        sourcePosition,
        targetX,
        targetY,
        targetPosition,
    });

    return (
        <>
            <BaseEdge
                path={edgePath}
                markerEnd={markerEnd}
                style={{
                    strokeWidth: 2,
                    stroke: '#b1b1b7'
                }}
            />
            <EdgeLabelRenderer>
                <PositionContainer labelX={labelX} labelY={labelY}>
                </PositionContainer >
            </EdgeLabelRenderer >
        </>
    );
}