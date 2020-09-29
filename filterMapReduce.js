// Retorne a soma do dobro de todos os pares
const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];

const pares = valor => valor % 2 === 0;
const dobro = valor => valor * 2;
const soma = (acumulador, valor) => acumulador + valor;

const somaDobroDosPares = numeros.filter(pares).map(dobro).reduce(soma);
console.log(somaDobroDosPares);
