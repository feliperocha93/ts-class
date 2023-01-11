import { valueToNumber } from "./valueToNumber.js";
function normalizarTransacao(transacao) {
    return {
        nome: transacao.Nome,
        id: transacao.ID,
        data: transacao.Data,
        status: transacao.Status,
        email: transacao.Email,
        moeda: transacao['Valor (R$)'],
        valor: valueToNumber(transacao['Valor (R$)']),
        pagamento: transacao['Forma de Pagamento'],
        novo: Boolean(transacao['Cliente Novo']),
    };
}
export { normalizarTransacao };
//# sourceMappingURL=normalize.js.map