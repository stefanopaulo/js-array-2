const nomes = ['Maria', 'João', 'Eduardo', 'Gabriel', 'Júlia'];

// nomes.splice(indice, remover, adicionar...)

// simulando pop
nomes.splice(-1, 1); // o -1 sempre vai pegar o último elemento
console.log(nomes);

// simulando o shift
nomes.splice(0, 1);
console.log(nomes);

// simulando o unshift
nomes.splice(0, 0, 'Pedro');
console.log(nomes);

// simulando o push
nomes.splice(nomes.length, 0, 'Rosana');
console.log(nomes);
