import { ReactNode } from 'react'
import { IDadosLinhaProducao } from '../../types'

export interface IContextDadosLinhaProducao {
    dados: IDadosLinhaProducao[]
    producao: IDadosLinhaProducao | undefined
    selecionarProducao: (idProducao: number) => void
    prosseguirEtapa: (idProducao: number) => void
}

export interface IPropsDadosLinhaProducaoProvider {
    children: ReactNode
}
