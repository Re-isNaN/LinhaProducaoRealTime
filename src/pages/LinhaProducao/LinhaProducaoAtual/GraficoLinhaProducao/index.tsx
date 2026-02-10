import { ReactFlow } from '@xyflow/react';
import '@xyflow/react/dist/style.css';
import { Etapa } from "./Etapa";
import { Conexao } from "./Conexao";
import { ContainerGraficoLinhaProducao } from "./styles";
import { useContextGraficoLinhaProducao } from "../contexts/organizacaoGrafico";
import { useMemo } from 'react';

export function GraficoLinhaProducao() {

    const { nodes, edges } = useContextGraficoLinhaProducao()

    // Tipos de nós customizados
    const nodeTypes = useMemo(() => ({
        customNode: Etapa,
    }), []);

    // Registrar tipos
    const edgeTypes = useMemo(() => ({
        custom: Conexao,
    }), []);

    return (
        <ContainerGraficoLinhaProducao>
            <ReactFlow
                nodes={nodes}
                edges={edges}
                //@ts-expect-error erro de tipagem por customizar nó no workflow
                nodeTypes={nodeTypes}
                //@ts-expect-error erro de tipagem por customizar aresta no workflow
                edgeTypes={edgeTypes}
                // isValidConnection={isValidConnection}
                fitView
            >
            </ReactFlow>
        </ContainerGraficoLinhaProducao>
    )
}