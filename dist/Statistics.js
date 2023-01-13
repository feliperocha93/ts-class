import { countBy } from "./countBy.js";
function filterValue(transaction) {
    return transaction.valor !== null;
}
class Statistics {
    transactions;
    total;
    payment;
    status;
    week;
    constructor(transactions) {
        this.transactions = transactions;
        this.total = this.setTotal();
        this.payment = this.setPayment();
        this.status = this.setStatus();
        this.week = this.setWeek();
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
    setWeek() {
        let WEEK;
        (function (WEEK) {
            WEEK[WEEK["sunday"] = 0] = "sunday";
            WEEK[WEEK["monday"] = 1] = "monday";
            WEEK[WEEK["tuesday"] = 2] = "tuesday";
            WEEK[WEEK["wednesday"] = 3] = "wednesday";
            WEEK[WEEK["thursday"] = 4] = "thursday";
            WEEK[WEEK["friday"] = 5] = "friday";
            WEEK[WEEK["saturday"] = 6] = "saturday";
        })(WEEK || (WEEK = {}));
        const week = {
            sunday: 0,
            monday: 0,
            tuesday: 0,
            wednesday: 0,
            thursday: 0,
            friday: 0,
            saturday: 0
        };
        for (let i = 0; i < this.transactions.length; i++) {
            const day = WEEK[this.transactions[i].data.getDay()];
            week[day] += 1;
        }
        return week;
    }
}
export { Statistics };
//# sourceMappingURL=Statistics.js.map