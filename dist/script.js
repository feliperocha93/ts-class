import { fetchData } from "./fetchData.js";
async function handleData() {
    const data = await fetchData('https://api.origamid.dev/json/transacoes.json');
    data?.forEach(item => {
        console.log(item.Email);
    });
}
console.log(await handleData());
//# sourceMappingURL=script.js.map