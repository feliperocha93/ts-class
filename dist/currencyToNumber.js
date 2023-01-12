function currencyToNumber(currency) {
    const num = Number(currency.replaceAll('.', '').replace(',', '.'));
    return isNaN(num) ? null : num;
}
export { currencyToNumber };
//# sourceMappingURL=currencyToNumber.js.map