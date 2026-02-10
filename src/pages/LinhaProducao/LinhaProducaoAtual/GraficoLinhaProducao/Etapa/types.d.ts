import { TypeStatus } from "@/@types/TiposStatus"

export interface IPropsEtapa {
    id: 'fim' | 'inicio' | `${number}`,
    data: {
        status: TypeStatus
        tempo: string
        etapa: string
        descricao: string
    }
}