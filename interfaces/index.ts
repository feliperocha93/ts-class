interface Humano {
  nome: string;
  idade?: number;
  [prop: string]: any;
  saudar(sobrenome: string): void;
}

function saudarComOla(pessoa: Humano) {
  console.log({pessoa});
  console.log(`Olá, ${pessoa.nome}`);
}

function mudarNome(pessoa: Humano, nome: string) {
  pessoa.nome = nome;
};

const pessoa: Humano = {
  nome: 'Felipe',
  idade: 29,
  saudar(sobrenome: string): void {
    console.log(`Olá, meu nome é ${this.nome} ${sobrenome}`);
  }
};

saudarComOla(pessoa);
mudarNome(pessoa, 'Rocha');
saudarComOla({
  nome: 'Felipe',
  idade: 29,
  altura: 1.75,
  peso: 42,
  saudar: (a: string) => console.log(a)
});
pessoa.saudar('Skywalker');

// Usando Classes...
/**
 * Quando definimos que uma classe implementa uma interface, a classe em questão
 * deve respeitar o que foi definido naquela interface.
 * Também podemos usar outros atributos e métodos que não estão definidos na interface.
 */
class Cliente implements Humano {
  nome: string = '';
  ultimaCompra: Date = new Date(); // Não tem relação com [prop: string]: any;
  saudar(sobrenome: string): void {
    console.log(`Olá, meu nome é ${this.nome} ${sobrenome}`);
  };
  obterDataDaUltimaCompra(): string {
    return this.ultimaCompra.toISOString();
  }
}

const meuCliente = new Cliente();
meuCliente.nome = 'Lebron';
saudarComOla(meuCliente);
meuCliente.saudar('James');
console.log({ultimaCompra: meuCliente.ultimaCompra});
console.log({'Data da última compra': meuCliente.obterDataDaUltimaCompra()});

// Interface Função
/**
 * O nome dos parametros não importa. O que importa são os tipos, a quantidade e
 * a ordem.
 */

interface FuncaoCalculo {
  (a: number, b: number): number;
}

let potencia: FuncaoCalculo;

potencia = (base: number, expoente: number): number => {
  // return Math.pow(base, expoente);
  // return base ** expoente;
  return Array(expoente).fill(base).reduce((t, a) => t * a);
};

console.log(potencia(3, 10));
