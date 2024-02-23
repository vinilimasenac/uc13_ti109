console.log(process.argv)

const args = process.argv.slice(2);

console.log(args);

const nome = args[0].split("=")[1]; // pega o valor do parametro passado no comando de execução, após o "=".

const idade = args[1].split("=")[1]; 

console.log(nome)
console.log(idade)

console.log(`O usuario ${nome} tem ${idade} anos.`);

