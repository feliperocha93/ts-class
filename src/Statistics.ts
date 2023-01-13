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
  week;
  topDay;

  constructor(transactions: Transaction[]) {
    this.transactions = transactions;
    this.total = this.setTotal();
    this.payment = this.setPayment();
    this.status = this.setStatus();
    this.week = this.setWeek();
    this.topDay = this.setTopDay();
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

  private setWeek() {
    interface WeeklyCount {
      [key: string]: number
    }

    enum WEEK {
      ["Domingo"],
      ["Segunda-feira"],
      ["Terça-feira"],
      ["Quarta-feira"],
      ["Quinta-feira"],
      ["Sexta-feira"],
      ["Sábado"],
    }

    const week: WeeklyCount = {
      ["Domingo"]: 0,
      ["Segunda-feira"]: 0,
      ["Terça-feira"]: 0,
      ["Quarta-feira"]: 0,
      ["Quinta-feira"]: 0,
      ["Sexta-feira"]: 0,
      ["Sábado"]: 0
    }

    for(let i = 0; i < this.transactions.length; i++) {
      const day = WEEK[this.transactions[i].data.getDay()] as keyof WeeklyCount;
      week[day] += 1;
    }

    console.log({week})

    return week;
  }

  private setTopDay() {
    return Object.entries(this.week).sort(([,a], [,b]) => b - a)[0];
  }
}

export { Statistics }