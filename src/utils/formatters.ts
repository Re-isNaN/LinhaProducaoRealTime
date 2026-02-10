export const priceFormatter = new Intl.NumberFormat('pt-br', {
  style: 'currency',
  currency: 'BRL',
})

export const numberFormatter = new Intl.NumberFormat('pt-br', {
  minimumFractionDigits: 2,
  maximumFractionDigits: 2,
})

export const percentFormatter = new Intl.NumberFormat('pt-br', {
  style: 'percent',
  maximumFractionDigits: 2,
})

export const listFormatter = new Intl.ListFormat('pt-BR', {
  style: 'long',
  type: 'conjunction',
})