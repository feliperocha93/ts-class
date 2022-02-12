"use strict";
function saudarComOla(pessoa) {
    console.log({ pessoa });
    console.log(`Olá, ${pessoa.nome}`);
}
function mudarNome(pessoa, nome) {
    pessoa.nome = nome;
}
;
const pessoa = {
    nome: 'Felipe',
    idade: 29,
    saudar(sobrenome) {
        console.log(`Olá, meu nome é ${this.nome} ${sobrenome}`);
    }
};
saudarComOla(pessoa);
mudarNome(pessoa, 'Rocha');
// saudarComOla({nome: 'Felipe', idade: 29, altura: 1.75, peso: 42});
pessoa.saudar('Skywalker');
// Usando Classes...
/**
 * Quando definimos que uma classe implementa uma interface, a classe em questão
 * deve respeitar o que foi definido naquela interface.
 * Também podemos usar outros atributos e métodos que não estão definidos na interface.
 */
class Cliente {
    constructor() {
        this.nome = '';
        this.ultimaCompra = new Date(); // Não tem relação com [prop: string]: any;
    }
    saudar(sobrenome) {
        console.log(`Olá, meu nome é ${this.nome} ${sobrenome}`);
    }
    ;
    obterDataDaUltimaCompra() {
        return this.ultimaCompra.toISOString();
    }
}
const meuCliente = new Cliente();
meuCliente.nome = 'Lebron';
saudarComOla(meuCliente);
meuCliente.saudar('James');
console.log({ ultimaCompra: meuCliente.ultimaCompra });
console.log({ 'Data da última compra': meuCliente.obterDataDaUltimaCompra() });
let potencia;
potencia = (base, expoente) => {
    // return Math.pow(base, expoente);
    // return base ** expoente;
    return Array(expoente).fill(base).reduce((t, a) => t * a);
};
console.log(potencia(3, 10));
