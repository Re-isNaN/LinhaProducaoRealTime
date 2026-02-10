import { TypeStatus } from "@/@types/TiposStatus";

export function statusTheme(status: TypeStatus) {
    switch (status) {
        case 'ATRASADA':
            return 'warning'

        case 'PARADA':
            return 'alert'

        case 'CANCELADA':
            return 'error'

        case 'CONCLUÍDA':
            return 'success'

        case 'PRODUZINDO':
            return 'info'

        default:
            return 'neutral'
    }
}