function currencyToNumber(currency: string) {
  const num = Number(currency.replaceAll('.', '').replace(',', '.'));
  return isNaN(num) ? null : num;
}

export { currencyToNumber }