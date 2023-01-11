const valueToNumber = (value) => {
    const num = Number(value.replaceAll('.', '').replace(',', '.'));
    return isNaN(num) ? num : null;
};
export { valueToNumber };
//# sourceMappingURL=valueToNumber.js.map