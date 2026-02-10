import { TypeStatus } from "@/@types/TiposStatus"

export interface INodeWorkflow {
    id: string
    type: string
    position: {
        x: number
        y: number
    }
    data: {
        status?: TypeStatus
        tempo: string
        etapa: string
        descricao: string
    };
}

export interface IEdgeWorkflow {
    id: string;
    source: string;
    target: string;
    type: string;
}


export interface IPropsLinhaProducaoAtual {
    open: boolean
    handleClose: () => void
}