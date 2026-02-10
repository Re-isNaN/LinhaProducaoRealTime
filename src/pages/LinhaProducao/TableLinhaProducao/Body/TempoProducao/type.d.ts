import { TypeStatus } from "@/@types/TiposStatus"

export interface IPropsTempoProducao {
    produto: string | null
    inicio: Date | null
    fim: Date | null
    status: TypeStatus
}