const nomes = ['Eduardo', 'Maria', 'Joana'];
nomes[2] = 'João';
delete nomes[2];
console.log(nomes);

let novo = nomes;
novo.pop();
console.log(nomes);

novo = [...nomes];
novo.push('Joana');
console.log(novo, nomes);

console.log(nomes.length);

const removido = nomes.pop();
console.log(removido, nomes)

nomes.push('Maria', 'Joana', 'Gabriel');
console.log(nomes);

nomes.shift();
console.log(nomes);

nomes.unshift('Wallace');
console.log(nomes);

nomes.push('João', 'Rosana');

const novoArray = nomes.slice(1, 3); // o indice final não é incluido
console.log(novoArray);

// convertendo string em array
const nome = 'Luiz Otávio Miranda';
const novoNomes = nome.split(' ');
console.log(novoNomes);

// conertendo array em string
const nomes2 = ['Luiz', 'Otávio', 'Miranda'];
const nome2 = nomes2.join(' ');
console.log(nome2)
