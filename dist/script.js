import { fetchData } from "./fetchData.js";
import { normalizarTransacao } from './normalize.js';
async function handleData() {
    const data = await fetchData('https://api.origamid.dev/json/transacoes.json');
    if (!data)
        return;
    const transacoes = data.map(normalizarTransacao);
    console.log(transacoes[0]);
}
handleData();
//# sourceMappingURL=script.js.map