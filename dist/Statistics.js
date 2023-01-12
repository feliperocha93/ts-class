function filterValue(transaction) {
    return transaction.valor !== null;
}
class Statistics {
    transactions;
    total;
    constructor(transactions) {
        this.transactions = transactions;
        this.total = this.setTotal();
    }
    setTotal() {
        return this.transactions.filter(filterValue).reduce((acc, item) => acc + item.valor, 0);
    }
}
export { Statistics };
//# sourceMappingURL=Statistics.js.map