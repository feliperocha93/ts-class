import { fetchData } from "./fetchData.js";
import { 
  normalizarTransacao,
  type TransacaoAPI,
  type Transacao,
  } from './normalize.js';
import { Statistics } from "./Statistics.js";

async function handleData() {
  const data = await fetchData<TransacaoAPI[]>('https://api.origamid.dev/json/transacoes.json');

  if (!data) return;

  const transacoes = data.map(normalizarTransacao);

  fillTable(transacoes);
  fillStatistics(transacoes);
}

function fillTable(transactions: Transacao[]) {
  const table = document.querySelector('#transacoes tbody');

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

function fillStatistics(transactions: Transacao[]) {
  const data = new Statistics(transactions);
  const totalElement = document.querySelector<HTMLElement>("#total span");
  if (totalElement) totalElement.innerText =data.total.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL"
  })
}

handleData()
