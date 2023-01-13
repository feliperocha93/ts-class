import { fetchData } from "./fetchData.js";
import { normalizeTransaction, } from './normalize.js';
import { Statistics } from "./Statistics.js";
async function handleData() {
    const data = await fetchData('https://api.origamid.dev/json/transacoes.json');
    if (!data)
        return;
    const transactions = data.map(normalizeTransaction);
    fillTable(transactions);
    fillStatistics(transactions);
}
function fillTable(transactions) {
    const table = document.querySelector('#transactions tbody');
    if (!table)
        return;
    transactions.forEach(t => {
        table.innerHTML += `
      <tr>
        <td>${t.nome}</td>
        <td>${t.email}</td>
        <td>R$${t.moeda}</td>
        <td>${t.pagamento}</td>
        <td>${t.status}</td>
      </tr>
    `;
    });
}
function fillStatistics(transactions) {
    const data = new Statistics(transactions);
    const totalElement = document.querySelector("#total span");
    if (totalElement)
        totalElement.innerText = data.total.toLocaleString("pt-BR", {
            style: "currency",
            currency: "BRL"
        });
}
handleData();
//# sourceMappingURL=script.js.map