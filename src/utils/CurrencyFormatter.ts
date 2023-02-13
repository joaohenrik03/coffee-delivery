export function currencyFormatter(value: number) {
  return value.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })
}
