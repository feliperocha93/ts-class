import { currencyToNumber } from "./currencyToNumber.js";
import { stringToDate } from "./stringToDate.js";

type TransactionPagamento = "Boleto" | "Cartão de Crédito";
type TransactionStatus =
  | "Paga"
  | "Recusada pela operadora de cartão"
  | "Agurdando pagamento"
  | "Estornada";

interface TransactionAPI {
  Nome: string;
  ID: number;
  Data: string;
  Status: TransactionStatus;
  Email: string;
  ["Valor (R$)"]: string;
  ["Forma de Pagamento"]: TransactionPagamento;
  ["Cliente Novo"]: number;
}

interface Transaction {
  nome: string;
  id: number;
  data: Date;
  status: TransactionStatus;
  email: string;
  moeda: string;
  valor: number | null;
  pagamento: TransactionPagamento;
  novo: boolean;
}

function normalizeTransaction(transacao: TransactionAPI): Transaction {
  return {
      nome: transacao.Nome,
      id: transacao.ID,
      data: stringToDate(transacao.Data),
      status: transacao.Status,
      email: transacao.Email,
      moeda: transacao['Valor (R$)'],
      valor: currencyToNumber(transacao['Valor (R$)']),
      pagamento: transacao['Forma de Pagamento'],
      novo: Boolean(transacao['Cliente Novo']),
  }
}

export { 
  normalizeTransaction,
  type TransactionAPI,
  type Transaction
}