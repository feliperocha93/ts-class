import { countBy } from "./countBy.js";
import { Transaction } from "./normalize";

type TransacionValue = Transaction & { valor: number };
function filterValue(transaction: Transaction): transaction is TransacionValue {
  return transaction.valor !== null;
}

class Statistics {
  private transactions;
  total;
  payment;
  status;

  constructor(transactions: Transaction[]) {
    this.transactions = transactions;
    this.total = this.setTotal();
    this.payment = this.setPayment();
    this.status = this.setStatus();
  }

  private setTotal() {
    return this.transactions.filter(filterValue).reduce((acc, item) => acc + item.valor, 0);
  }

  private setPayment() {
    return countBy(this.transactions.map(({pagamento}) => pagamento));
  }

  private setStatus() {
    return countBy(this.transactions.map(({status}) => status));
  }
}

export { Statistics }