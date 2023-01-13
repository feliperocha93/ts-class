import { Transaction } from "./normalize";

type TransacionValue = Transaction & { valor: number };
function filterValue(transaction: Transaction): transaction is TransacionValue {
  return transaction.valor !== null;
}

class Statistics {
  private transactions;
  total;

  constructor(transactions: Transaction[]) {
    this.transactions = transactions;
    this.total = this.setTotal();
  }

  private setTotal() {
    return this.transactions.filter(filterValue).reduce((acc, item) => acc + item.valor, 0);
  }
}

export { Statistics }