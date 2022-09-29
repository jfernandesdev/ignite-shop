export const { format: formatPrice } = new Intl.NumberFormat('pt-br', {
  // minimumFractionDigits: 2,
  style: 'currency',
  currency: 'BRL',
})