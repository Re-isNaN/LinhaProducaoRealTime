import { IDadosLinhaProducao } from "@/pages/LinhaProducao/types"

export function avancarProducao(prod: IDadosLinhaProducao, agora: Date): IDadosLinhaProducao {
    // INICIAR PRODUÇÃO
    if (prod.status === 'CONCLUÍDA') {
        return {
            ...prod,
            status: 'PRODUZINDO',
            etapaAtual: prod.etapas[0].etapa,
            horaInicio: agora,
            horaFim: null,
            inicioEtapa: agora,
            fimEtapa: null,
            etapas: prod.etapas.map((e, i) => ({
                ...e,
                inicio: i === 0 ? agora : e.inicio,
                status: i === 0 ? 'PRODUZINDO' : ''
            }))
        }
    }

    // AVANÇAR ETAPA
    const indexAtual = prod.etapas.findIndex(e => e.status === 'PRODUZINDO')

    // CASO ESTEJA PRODUZINDO NA ÚLTIMA ETAPA (FINALIZAR PRODUÇÃO)
    const ultima = indexAtual === prod.etapas.length - 1
    if (ultima) {
        return {
            ...prod,
            status: 'CONCLUÍDA',
            etapaAtual: prod.etapas[indexAtual].etapa,
            horaFim: agora,
            fimEtapa: agora,
            etapas: prod.etapas.map((e, i) =>
                i === indexAtual
                    ? { ...e, status: 'CONCLUÍDA', fim: agora }
                    : e
            )
        }
    }

    // CASO ESTEJA PRODUZINDO, AVANÇAR ETAPA
    const proxima = indexAtual + 1
    return {
        ...prod,
        status: 'PRODUZINDO',
        etapaAtual: prod.etapas[proxima].etapa,
        fimEtapa: agora,
        etapas: prod.etapas.map((e, i) => {

            // MARCAR ETAPAS ANTERIORES COMO CONCLUIDA
            if (i < proxima) {
                return { ...e, status: 'CONCLUÍDA' }
            }

            // MARCAR PROXIMA ETAPA COMO PRODUZINDO
            if (i === proxima) {
                return {
                    ...e,
                    status: 'PRODUZINDO',
                    inicio: agora
                }
            }
            return e
        })
    }
}
