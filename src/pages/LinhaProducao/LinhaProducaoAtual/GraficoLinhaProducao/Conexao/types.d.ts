import { Position } from "@xyflow/react";

export interface IPropsConexao {
    sourceX: number,
    sourceY: number,
    targetX: number,
    targetY: number,
    sourcePosition: Position,
    targetPosition: Position,
    markerEnd: string,
}