import { createContext, useCallback, useContext, useMemo, useReducer, useState } from 'react'
import { IDadosLinhaProducao } from '../../types'
import { IContextDadosLinhaProducao, IPropsDadosLinhaProducaoProvider } from './types'
import { avancarProducao } from './utils/avancarProducao'

const DadosLinhaProducaoContext = createContext({} as IContextDadosLinhaProducao)

export const useContextDadosLinhaProducao = () => {
    return useContext(DadosLinhaProducaoContext)
}

export function DadosLinhaProducaoProvider({
    children,
}: IPropsDadosLinhaProducaoProvider) {
    function producaoReducer(state: IDadosLinhaProducao[], action: { type: 'AVANCAR_ETAPA', id: number }) {

        if (action.type === 'AVANCAR_ETAPA') {
            const agora = new Date()

            return state.map((p, i) =>
                i === action.id
                    ? avancarProducao(p, agora)
                    : p
            )
        }

        return state
    }

    const dadosIniciais: IDadosLinhaProducao[] = [
        {
            id: 0,
            produto: 'Produto I',
            etapaAtual: 'Finalização',
            inicioEtapa: new Date('2026-01-26T09:20:00'),
            fimEtapa: new Date('2026-01-26T13:20:00'),
            horaInicio: new Date('2026-01-26T09:20:00'),
            horaFim: new Date('2026-01-26T13:20:00'),
            qtde: 70,
            status: 'CONCLUÍDA',
            setor: 'Produto Final',
            etapas: [
                { id: '1' as const, etapa: 'Preparação', status: 'CONCLUÍDA', inicio: new Date('2026-01-26T08:00:00'), fim: new Date('2026-01-26T09:00:00'), qtde: 70 },
                { id: '2' as const, etapa: 'Corte e usinagem', status: 'CONCLUÍDA', inicio: new Date('2026-01-26T09:10:00'), fim: new Date('2026-01-26T10:30:00'), qtde: 70 },
                { id: '3' as const, etapa: 'Montagem', status: 'CONCLUÍDA', inicio: new Date('2026-01-26T10:40:00'), fim: new Date('2026-01-26T12:00:00'), qtde: 70 },
                { id: '4' as const, etapa: 'Pintura', status: 'CONCLUÍDA', inicio: new Date('2026-01-26T13:00:00'), fim: new Date('2026-01-26T14:30:00'), qtde: 70 },
                { id: '5' as const, etapa: 'Acabamento', status: 'CONCLUÍDA', inicio: new Date('2026-01-26T14:40:00'), fim: new Date('2026-01-26T15:30:00'), qtde: 70 },
                { id: '6' as const, etapa: 'Limpeza', status: 'CONCLUÍDA', inicio: new Date('2026-01-26T15:40:00'), fim: new Date('2026-01-26T16:10:00'), qtde: 70 },
                { id: '7' as const, etapa: 'Polimento', status: 'CONCLUÍDA', inicio: new Date('2026-01-26T16:20:00'), fim: new Date('2026-01-26T17:00:00'), qtde: 70 },
                { id: '8' as const, etapa: 'Inspeção', status: 'CONCLUÍDA', inicio: new Date('2026-01-26T17:10:00'), fim: new Date('2026-01-26T17:40:00'), qtde: 70 },
                { id: '9' as const, etapa: 'Embalagem', status: 'CONCLUÍDA', inicio: new Date('2026-01-26T17:50:00'), fim: new Date('2026-01-26T18:20:00'), qtde: 70 },
            ]
        },
        {
            id: 1,
            produto: 'Produto V',
            etapaAtual: 'Finalização',
            inicioEtapa: new Date('2026-01-26T09:20:00'),
            fimEtapa: new Date('2026-01-26T11:45:00'),
            horaInicio: new Date('2026-01-26T11:30:00'),
            horaFim: new Date('2026-01-26T11:45:00'),
            qtde: 20,
            status: 'CONCLUÍDA',
            setor: 'Produto Final',
            etapas: [
                { id: '1' as const, etapa: 'Preparação', status: 'CONCLUÍDA', inicio: new Date('2026-01-26T08:00:00'), fim: new Date('2026-01-26T09:00:00'), qtde: 20 },
                { id: '2' as const, etapa: 'Corte e usinagem', status: 'CONCLUÍDA', inicio: new Date('2026-01-26T09:10:00'), fim: new Date('2026-01-26T10:30:00'), qtde: 20 },
                { id: '3' as const, etapa: 'Montagem', status: 'CONCLUÍDA', inicio: new Date('2026-01-26T10:40:00'), fim: new Date('2026-01-26T12:00:00'), qtde: 20 },
                { id: '4' as const, etapa: 'Acabamento', status: 'CONCLUÍDA', inicio: new Date('2026-01-26T13:00:00'), fim: new Date('2026-01-26T14:00:00'), qtde: 20 },
                { id: '5' as const, etapa: 'Inspeção', status: 'CONCLUÍDA', inicio: new Date('2026-01-26T14:10:00'), fim: new Date('2026-01-26T15:00:00'), qtde: 20 },
                { id: '6' as const, etapa: 'Embalagem', status: 'CONCLUÍDA', inicio: new Date('2026-01-26T15:10:00'), fim: new Date('2026-01-26T16:00:00'), qtde: 20 },
            ]
        },
        {
            id: 2,
            produto: 'Produto B',
            etapaAtual: 'Montagem',
            inicioEtapa: new Date('2026-01-26T09:20:00'),
            fimEtapa: null,
            horaInicio: new Date('2026-01-26T08:10:00'),
            horaFim: null,
            qtde: 40,
            status: 'PRODUZINDO',
            setor: 'Produção',
            etapas: [
                { id: '1' as const, etapa: 'Preparação', status: 'CONCLUÍDA', inicio: new Date('2026-01-26T08:00:00'), fim: new Date('2026-01-26T09:00:00'), qtde: 40 },
                { id: '2' as const, etapa: 'Montagem', status: 'CONCLUÍDA', inicio: new Date('2026-01-26T09:10:00'), fim: new Date('2026-01-26T10:30:00'), qtde: 40 },
                { id: '3' as const, etapa: 'Acabamento', status: 'PRODUZINDO', inicio: new Date('2026-01-26T10:40:00'), fim: null, qtde: 40 },
                { id: '4' as const, etapa: 'Embalagem', status: '', inicio: null, fim: null, qtde: 0 },
            ]

        },
        {
            id: 3,
            produto: 'Produto F',
            etapaAtual: 'Drenagem',
            inicioEtapa: new Date('2026-01-26T09:20:00'),
            fimEtapa: null,
            horaInicio: new Date('2026-01-26T08:50:00'),
            horaFim: null,
            qtde: 115,
            status: 'PRODUZINDO',
            setor: 'Produção',
            etapas: [
                { id: '1' as const, etapa: 'Preparação', status: 'CONCLUÍDA', inicio: new Date('2026-01-26T08:00:00'), fim: new Date('2026-01-26T09:00:00'), qtde: 115 },
                { id: '2' as const, etapa: 'Corte e usinagem', status: 'CONCLUÍDA', inicio: new Date('2026-01-26T09:10:00'), fim: new Date('2026-01-26T10:30:00'), qtde: 115 },
                { id: '3' as const, etapa: 'Montagem', status: 'CONCLUÍDA', inicio: new Date('2026-01-26T10:40:00'), fim: new Date('2026-01-26T12:00:00'), qtde: 115 },
                { id: '4' as const, etapa: 'Pintura', status: 'CONCLUÍDA', inicio: new Date('2026-01-26T13:00:00'), fim: new Date('2026-01-26T14:30:00'), qtde: 115 },
                { id: '5' as const, etapa: 'Acabamento', status: 'CONCLUÍDA', inicio: new Date('2026-01-26T14:40:00'), fim: new Date('2026-01-26T15:30:00'), qtde: 115 },
                { id: '6' as const, etapa: 'Limpeza', status: 'CONCLUÍDA', inicio: new Date('2026-01-26T15:40:00'), fim: new Date('2026-01-26T16:10:00'), qtde: 115 },
                { id: '7' as const, etapa: 'Polimento', status: 'PRODUZINDO', inicio: new Date('2026-01-26T16:20:00'), fim: null, qtde: 115 },
                { id: '8' as const, etapa: 'Inspeção', status: '', inicio: null, fim: null, qtde: 0 },
                { id: '9' as const, etapa: 'Embalagem', status: '', inicio: null, fim: null, qtde: 0 },
            ]
        },
        {
            id: 4,
            produto: 'Produto M',
            etapaAtual: 'Separação de itens',
            inicioEtapa: new Date('2026-01-26T09:20:00'),
            fimEtapa: null,
            horaInicio: new Date('2026-01-26T10:00:00'),
            horaFim: null,
            qtde: 65,
            status: 'PRODUZINDO',
            setor: 'Produção',
            etapas: [
                { id: '1' as const, etapa: 'Preparação', status: 'CONCLUÍDA', inicio: new Date('2026-01-26T08:00:00'), fim: new Date('2026-01-26T09:00:00'), qtde: 65 },
                { id: '2' as const, etapa: 'Montagem', status: 'PRODUZINDO', inicio: new Date('2026-01-26T09:10:00'), fim: null, qtde: 65 },
                { id: '3' as const, etapa: 'Acabamento', status: '', inicio: null, fim: null, qtde: 0 },
                { id: '4' as const, etapa: 'Embalagem', status: '', inicio: null, fim: null, qtde: 0 },
            ]

        },
        {
            id: 5,
            produto: 'Produto AA',
            etapaAtual: 'Polimento',
            inicioEtapa: new Date('2026-01-26T09:20:00'),
            fimEtapa: null,
            horaInicio: new Date('2026-01-26T12:20:00'),
            horaFim: new Date('2026-01-26T13:45:00'),
            qtde: 35,
            status: 'PARADA',
            setor: 'Produção',
            etapas: [
                { id: '1' as const, etapa: 'Preparação', status: 'CONCLUÍDA', inicio: new Date('2026-01-26T08:00:00'), fim: new Date('2026-01-26T09:00:00'), qtde: 35 },
                { id: '2' as const, etapa: 'Corte e usinagem', status: 'CONCLUÍDA', inicio: new Date('2026-01-26T09:10:00'), fim: new Date('2026-01-26T10:30:00'), qtde: 35 },
                { id: '3' as const, etapa: 'Montagem', status: 'CONCLUÍDA', inicio: new Date('2026-01-26T10:40:00'), fim: new Date('2026-01-26T12:00:00'), qtde: 35 },
                { id: '4' as const, etapa: 'Acabamento', status: 'CONCLUÍDA', inicio: new Date('2026-01-26T13:00:00'), fim: new Date('2026-01-26T14:00:00'), qtde: 35 },
                { id: '5' as const, etapa: 'Inspeção', status: 'PARADA', inicio: new Date('2026-01-26T14:10:00'), fim: null, qtde: 35 },
                { id: '6' as const, etapa: 'Embalagem', status: '', inicio: null, fim: null, qtde: 0 },
            ]
        },
        {
            id: 6,
            produto: 'Produto C',
            etapaAtual: 'Drenagem',
            inicioEtapa: new Date('2026-01-26T09:20:00'),
            fimEtapa: null,
            horaInicio: new Date('2026-01-26T08:20:00'),
            horaFim: new Date('2026-01-26T09:45:00'),
            qtde: 120,
            status: 'PARADA',
            setor: 'Produção',
            etapas: [
                { id: '1' as const, etapa: 'Preparação', status: 'CONCLUÍDA', inicio: new Date('2026-01-26T08:00:00'), fim: new Date('2026-01-26T09:00:00'), qtde: 100 },
                { id: '2' as const, etapa: 'Corte e usinagem', status: 'CONCLUÍDA', inicio: new Date('2026-01-26T09:10:00'), fim: new Date('2026-01-26T10:30:00'), qtde: 100 },
                { id: '3' as const, etapa: 'Montagem', status: 'PARADA', inicio: new Date('2026-01-26T10:40:00'), fim: null, qtde: 100 },
                { id: '4' as const, etapa: 'Acabamento', status: '', inicio: null, fim: null, qtde: 0 },
                { id: '5' as const, etapa: 'Inspeção', status: '', inicio: null, fim: null, qtde: 0 },
                { id: '6' as const, etapa: 'Embalagem', status: '', inicio: null, fim: null, qtde: 0 },
            ]
        },
        {
            id: 7,
            produto: 'Produto X',
            etapaAtual: 'Acabamento',
            inicioEtapa: new Date('2026-01-26T13:00:00'),
            fimEtapa: null,
            horaInicio: new Date('2026-01-26T08:00:00'),
            horaFim: null,
            qtde: 55,
            status: 'ATRASADA',
            setor: 'Separação de Matéria',
            etapas: [
                { id: '1' as const, etapa: 'Preparação', status: 'CONCLUÍDA', inicio: new Date('2026-01-26T08:00:00'), fim: new Date('2026-01-26T09:00:00'), qtde: 55 },
                { id: '2' as const, etapa: 'Corte e usinagem', status: 'CONCLUÍDA', inicio: new Date('2026-01-26T09:10:00'), fim: new Date('2026-01-26T10:30:00'), qtde: 55 },
                { id: '3' as const, etapa: 'Montagem', status: 'CONCLUÍDA', inicio: new Date('2026-01-26T10:40:00'), fim: new Date('2026-01-26T12:00:00'), qtde: 55 },
                { id: '4' as const, etapa: 'Acabamento', status: 'ATRASADA', inicio: new Date('2026-01-26T13:00:00'), fim: null, qtde: 55 },
                { id: '5' as const, etapa: 'Inspeção', status: '', inicio: null, fim: null, qtde: 0 },
                { id: '6' as const, etapa: 'Embalagem', status: '', inicio: null, fim: null, qtde: 0 },
            ]
        },
        {
            id: 8,
            produto: 'Produto Z',
            etapaAtual: 'Limpeza',
            inicioEtapa: new Date('2026-01-26T09:20:00'),
            fimEtapa: null,
            horaInicio: new Date('2026-01-26T12:10:00'),
            horaFim: new Date('2026-01-26T13:45:00'),
            qtde: 90,
            status: 'CANCELADA',
            setor: 'Separação de Matéria',
            etapas: [
                { id: '1' as const, etapa: 'Preparação', status: 'CANCELADA', inicio: new Date('2026-01-26T08:00:00'), fim: new Date('2026-01-26T09:00:00'), qtde: 90 },
                { id: '2' as const, etapa: 'Montagem', status: 'CANCELADA', inicio: new Date('2026-01-26T09:10:00'), fim: new Date('2026-01-26T10:30:00'), qtde: 90 },
                { id: '3' as const, etapa: 'Acabamento', status: 'CANCELADA', inicio: new Date('2026-01-26T10:40:00'), fim: null, qtde: 90 },
                { id: '4' as const, etapa: 'Embalagem', status: 'CANCELADA', inicio: null, fim: null, qtde: 0 },
            ]

        },
    ]

    const [dados, dispatch] = useReducer(producaoReducer, dadosIniciais)

    const [idSelecionado, setIdSelecionado] = useState<number | null>(null)

    const producao = useMemo(() => {
        if (idSelecionado === null) return undefined
        return dados[idSelecionado]
    }, [dados, idSelecionado])

    const selecionarProducao = useCallback((idProducao: number) => { setIdSelecionado(idProducao) }, [])

    const prosseguirEtapa = useCallback((idProducao: number) => {
        dispatch({ type: 'AVANCAR_ETAPA', id: idProducao })
    }, [])

    // console.log(producao === prevRef.current)

    //     const value = useMemo(() => ({
    //         producao,
    //         ...
    // }), [producao])

    return (
        <DadosLinhaProducaoContext.Provider
            value={{
                dados: dados || [],
                producao,
                selecionarProducao,
                prosseguirEtapa
            }}
        >
            {children}
        </DadosLinhaProducaoContext.Provider>
    )
}
