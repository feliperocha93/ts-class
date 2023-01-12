function currencyToNumber(currency) {
    const num = Number(currency.replaceAll('.', '').replace(',', '.'));
    return isNaN(num) ? num : null;
}
export { currencyToNumber };
//# sourceMappingURL=currencyToNumber.js.map