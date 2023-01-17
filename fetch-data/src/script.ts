import { CountList } from "./countBy.js";
import { fetchData } from "./fetchData.js";
import { 
  normalizeTransaction,
  type TransactionAPI,
  type Transaction,
  } from './normalize.js';
import { Statistics } from "./Statistics.js";

async function handleData() {
  const data = await fetchData<TransactionAPI[]>('https://api.origamid.dev/json/transacoes.json');

  if (!data) return;

  const transactions = data.map(normalizeTransaction);

  fillTable(transactions);
  fillStatistics(transactions);
}

function fillTable(transactions: Transaction[]) {
  const table = document.querySelector('#transactions tbody');

  if (!table) return;

  transactions.forEach(t => {
    table.innerHTML += `
      <tr>
        <td>${t.nome}</td>
        <td>${t.email}</td>
        <td>R$${t.moeda}</td>
        <td>${t.pagamento}</td>
        <td>${t.status}</td>
      </tr>
    `
  })
}

function fillList(list: CountList, containerId: string) {
  const containerElement = document.getElementById(containerId);
  if (containerElement) {
    Object.keys(list).forEach(k => {
      containerElement.innerHTML += `<p>${k}: ${list[k]}</p>`
    })
  }
}

function fillStatistics(transactions: Transaction[]) {
  const data = new Statistics(transactions);

  fillList(data.payment, 'payment');
  fillList(data.status, 'status');

  const totalElement = document.querySelector<HTMLElement>("#total span");
  if (totalElement) totalElement.innerText = data.total.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL"
  });

  const dayElement = document.querySelector<HTMLElement>("#topday span");
  if (dayElement) dayElement.innerText = data.topDay[0]
}

handleData()
