export default function(amount, symbol) {
  const currencySymbol = symbol || '$'
  return `${currencySymbol}${amount}`
}
