const currencyToNumber = (currency: string): number | null => {
  const num = Number(currency.replaceAll('.', '').replace(',', '.'));
  return isNaN(num) ? num : null;
}

export { currencyToNumber }