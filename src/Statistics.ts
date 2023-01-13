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

  constructor(transactions: Transaction[]) {
    this.transactions = transactions;
    this.total = this.setTotal();
    this.payment = this.setPayment();
    this.status = this.setStatus();
    this.week = this.setWeek();
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
    interface Week {
      sunday: number
      monday: number
      tuesday: number
      wednesday: number
      thursday: number
      friday: number
      saturday: number
    }
    enum WEEK {
      sunday,
      monday,
      tuesday,
      wednesday,
      thursday,
      friday,
      saturday
    }

    const week: Week = {
      sunday: 0,
      monday: 0,
      tuesday: 0,
      wednesday: 0,
      thursday: 0,
      friday: 0,
      saturday: 0
    }

    for(let i = 0; i < this.transactions.length; i++) {
      const day = WEEK[this.transactions[i].data.getDay()] as keyof Week;
      week[day] += 1;
    }

    return week;
  }
}

export { Statistics }