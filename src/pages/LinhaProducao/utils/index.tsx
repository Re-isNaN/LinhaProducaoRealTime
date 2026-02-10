import dayjs from "dayjs"

export function formatTempoDecorrido(inicio: Date | null, fim: Date | null) {

    if (inicio !== null) {
        let minutosTotais = dayjs(new Date()).diff(inicio, 'minutes')

        if (fim !== null) {
            minutosTotais = dayjs(fim).diff(inicio, 'minutes')
        }

        const horas = Math.floor(minutosTotais / 60)
        const minutosHora = minutosTotais - (horas * 60)

        return `${horas}h ${minutosHora.toString().padStart(2, '0')}m`
    }

    return '-'
}