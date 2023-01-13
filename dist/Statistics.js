import { countBy } from "./countBy.js";
function filterValue(transaction) {
    return transaction.valor !== null;
}
class Statistics {
    transactions;
    total;
    payment;
    status;
    constructor(transactions) {
        this.transactions = transactions;
        this.total = this.setTotal();
        this.payment = this.setPayment();
        this.status = this.setStatus();
    }
    setTotal() {
        return this.transactions.filter(filterValue).reduce((acc, item) => acc + item.valor, 0);
    }
    setPayment() {
        return countBy(this.transactions.map(({ pagamento }) => pagamento));
    }
    setStatus() {
        return countBy(this.transactions.map(({ status }) => status));
    }
}
export { Statistics };
//# sourceMappingURL=Statistics.js.map