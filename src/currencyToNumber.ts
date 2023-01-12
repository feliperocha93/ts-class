function currencyToNumber(currency: string) {
  const num = Number(currency.replaceAll('.', '').replace(',', '.'));
  return isNaN(num) ? num : null;
}

export { currencyToNumber }