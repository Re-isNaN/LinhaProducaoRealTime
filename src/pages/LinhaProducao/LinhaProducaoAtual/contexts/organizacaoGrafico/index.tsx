import { createContext, useContext, useEffect, useMemo } from 'react'
import { IContextGraficoLinhaProducao, IPropsGraficoLinhaProducaoProvider } from './types'
import { useEdgesState, useNodesState } from '@xyflow/react'
import { useContextDadosLinhaProducao } from '@/pages/LinhaProducao/contexts/dadosContext'
import { INodeWorkflow } from '../../types'

const GraficoLinhaProducaoContext = createContext({} as IContextGraficoLinhaProducao)

export const useContextGraficoLinhaProducao = () => {
    return useContext(GraficoLinhaProducaoContext)
}

export function GraficoLinhaProducaoProvider({
    children,
}: IPropsGraficoLinhaProducaoProvider) {
    const { producao } = useContextDadosLinhaProducao()

    const [nodes, setNodes] = useNodesState<INodeWorkflow>([]);

    const customEdges = useMemo(() => {
        let edges = [{
            id: 'inicio-1',
            source: 'inicio',
            target: '1',
            type: 'custom',
        }]

        if (producao?.etapas) {
            for (const indexEtapa in producao.etapas) {
                const id = Number(indexEtapa) + 1
                let proximoId = `${id + 1}`

                // última
                if (id === producao.etapas.length) { proximoId = 'fim' }

                let edge = {
                    id: `${id}-${proximoId}`,
                    source: `${id}`,
                    target: `${proximoId}`,
                    type: 'custom',
                }

                edges.push(edge)
            }
        }

        return edges
    }, [producao])

    const [edges] = useEdgesState([...customEdges]);

    useEffect(() => {
        if (producao?.etapas) {
            const etapas = producao.etapas.map((e, i) =>
            ({
                id: e.id,
                type: 'customNode',
                position: { x: -800 + (400 * i), y: 0 },
                data: { etapa: e.etapa, descricao: '', status: e.status, tempo: '' },
            }))

            const listaNova: INodeWorkflow[] = [
                {
                    id: 'inicio',
                    type: 'customNode',
                    position: { x: -1200, y: 0 },
                    data: { etapa: 'Início', descricao: '', status: '', tempo: '' },
                },
                ...etapas,
                {
                    id: 'fim',
                    type: 'customNode',
                    position: { x: -800 + (400 * etapas.length), y: 0 },
                    data: { etapa: 'Fim', descricao: '', status: '', tempo: '' },
                },
            ]

            setNodes([...listaNova])
        }
    }, [producao, producao?.etapas])

    return (
        <GraficoLinhaProducaoContext.Provider
            value={{
                nodes,
                edges,
            }}
        >
            {children}
        </GraficoLinhaProducaoContext.Provider>
    )
}
