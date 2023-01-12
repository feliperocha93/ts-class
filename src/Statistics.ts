import { Transacao } from "./normalize";

type TransacionValue = Transacao & { valor: number };
function filterValue(transaction: Transacao): transaction is TransacionValue {
  return transaction.valor !== null;
}

class Statistics {
  private transactions;
  total;

  constructor(transactions: Transacao[]) {
    this.transactions = transactions;
    this.total = this.setTotal();
  }

  private setTotal() {
    return this.transactions.filter(filterValue).reduce((acc, item) => acc + item.valor, 0);
  }
}

export { Statistics }