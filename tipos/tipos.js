"use strict";
// INFERÊNCIA: 
// Quando um valor é atribuído a uma variável,
// O TypeScript infere (inferir: fazer inferência sobre; concluir, deduzir)
// o tipo desta variável baseado no valor que foi atribuído.
// TUDO É NUMBER:
// Assim como o JavaScript, o TypeScript também não faz diferenciação entre valores
// reais e valores com ponto flutuante. Todos os valores são tratados como number.
// ERROS DE TIPAGEM:
// Por padrão, o compilador, mesmo com erros de tipagem na IDE, irá compilar os
// normalmente, que por sua vez, irão funcionar. Para alterar esse comportamento,
// é necessário realizar algumas configurações. (Acredito que no tsconfig.json)
// ARRAY
// É resolvido no typeof como object. Comportamento padrão do Javascript.
// Para a arrays, o TypeScript olha para os valores contidos nele no momento de
// realizar a inferência. Ela tende a ser exclusiva. Exemplos:
// ['Correr', 'Lutar'] -> string[]
// ['Correr', 32, false] -> (string | number | boolean)[]
// TUPLA
// Tupla é um tipo do TypeScript que funciona como um array, onde podemos determinar
// o comprimento exato (ou não) do array, além do tipo de cada item.
// Pense nelas como uma forma para conectar dados, mas com menos sintaxe que os objetos.
// ref: https://www.typescriptlang.org/pt/play#example/tuples
// ANY
// Usado para contornar limitações do sistema de tipos e dizer ao TypeScript que
// assumimos o risco sobre aquela tipagem. Funciona como uma espécie de tipagem
// coringa, que aceita qualquer tipo de tipo (exceto never)
// https://www.typescriptlang.org/pt/play#example/any
// TIPO IMPLÍCITO:
// implícito: contido numa proposição mas não expresso formalmente;
// string
let nome = 'Felipe'; // inferência
//nome = 29; -> erro de tipagem  
console.log({ nome: typeof nome });
// numbers
let idade = 29; // inferência
//idade = 'Felipe'; -> erro de tipagem
idade = 29.5;
console.log({ idade: typeof idade });
// boolean
let possuiHobbies = false; // inferência
//possuiHobbies = 1; -> erro de tipagem
console.log({ possuiHobbies: typeof possuiHobbies });
// array
let hobbies = ['Beber Whisky', 'Cozinhar'];
// hobbies = [100]; -> erro de tipagem
console.log({ hobbies: typeof hobbies });
// TIPO EXPLÍCITO (** best practice **)
// explícito: que é claro, declarado sem ambiguidade.
// string
let meuNome = 'Felipe';
console.log({ meuNome: typeof meuNome });
// number
let minhaIdade;
minhaIdade = 29;
console.log({ minhaIdade: typeof minhaIdade });
// array
let meusHobbies = ['Beber Whisky', 'Cozinhar', 44];
meusHobbies = [true, false];
// meusHobbies = 'Correr' -> erro de tipagem
console.log({ meusHobbies: typeof meusHobbies });
// tupla
let endereco = ["Av. Principal", 929, "Apartamento 14"];
console.log({ endereco });
endereco = ["Rua Importante", 1260, "Bloco C"];
// endereco = ["Rua Importante", 1260, "Bloco C", 123];  -> erro de tipagem
// endereco = ["Rua importante", 929, 123];  -> erro de tipagem
// any
let carro = 'BMW';
console.log({ carro });
carro = {
    marca: 'bmw',
    ano: 2015
};
console.log({ carro });
// enums
var LakersColors;
(function (LakersColors) {
    LakersColors[LakersColors["Roxo"] = 0] = "Roxo";
    LakersColors[LakersColors["Dourado"] = 1] = "Dourado";
    LakersColors[LakersColors["Branco"] = 2] = "Branco"; // 2
})(LakersColors || (LakersColors = {}));
;
var TrikasColors;
(function (TrikasColors) {
    TrikasColors[TrikasColors["Vermelho"] = 100] = "Vermelho";
    TrikasColors[TrikasColors["Preto"] = 101] = "Preto";
    TrikasColors[TrikasColors["Branco"] = 100] = "Branco";
})(TrikasColors || (TrikasColors = {}));
let corLakers = LakersColors.Dourado;
let corTrikas = TrikasColors.Preto;
console.log({ corLakers, corTrikas });
