const valueToNumber = (value: string): number | null => {
  const num = Number(value.replaceAll('.', '').replace(',', '.'));
  return isNaN(num) ? num : null;
}

export { valueToNumber }