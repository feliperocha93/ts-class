import { fetchData } from "./fetchData.js";
import { type TransacaoAPI, normalizarTransacao } from './normalize.js';

async function handleData() {
  const data = await fetchData<TransacaoAPI[]>('https://api.origamid.dev/json/transacoes.json');

  if (!data) return;

  const transacoes = data.map(normalizarTransacao);

  transacoes?.forEach(item => {
    console.log(item.email);
  });
}

console.log(await handleData())
