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
    topDay;
    constructor(transactions) {
        this.transactions = transactions;
        this.total = this.setTotal();
        this.payment = this.setPayment();
        this.status = this.setStatus();
        this.week = this.setWeek();
        this.topDay = this.setTopDay();
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
            WEEK[WEEK["Domingo"] = 0] = "Domingo";
            WEEK[WEEK["Segunda-feira"] = 1] = "Segunda-feira";
            WEEK[WEEK["Terça-feira"] = 2] = "Terça-feira";
            WEEK[WEEK["Quarta-feira"] = 3] = "Quarta-feira";
            WEEK[WEEK["Quinta-feira"] = 4] = "Quinta-feira";
            WEEK[WEEK["Sexta-feira"] = 5] = "Sexta-feira";
            WEEK[WEEK["Sábado"] = 6] = "Sábado";
        })(WEEK || (WEEK = {}));
        const week = {
            ["Domingo"]: 0,
            ["Segunda-feira"]: 0,
            ["Terça-feira"]: 0,
            ["Quarta-feira"]: 0,
            ["Quinta-feira"]: 0,
            ["Sexta-feira"]: 0,
            ["Sábado"]: 0
        };
        for (let i = 0; i < this.transactions.length; i++) {
            const day = WEEK[this.transactions[i].data.getDay()];
            week[day] += 1;
        }
        console.log({ week });
        return week;
    }
    setTopDay() {
        return Object.entries(this.week).sort(([, a], [, b]) => b - a)[0];
    }
}
export { Statistics };
//# sourceMappingURL=Statistics.js.map