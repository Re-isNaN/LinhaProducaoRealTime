import { TypeStatus } from "@/@types/TiposStatus"

export interface IDadosEtapas {
    id: string
    etapa: string
    status: TypeStatus
    inicio: Date | null
    fim: Date | null
    qtde: number | null
}

export interface IDadosLinhaProducao {
    id: number
    produto: string
    horaInicio: Date | null
    horaFim: Date | null
    status: TypeStatus
    qtde: number | null
    setor: string
    etapaAtual: string | null
    inicioEtapa: Date | null
    fimEtapa: Date | null
    etapas: IDadosEtapas[]
}