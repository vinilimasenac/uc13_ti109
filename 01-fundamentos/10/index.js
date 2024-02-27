

// Exemplo 02 - solicitar ao usuário que informe a primeira nota, em seguinda a segunda nota e após isso o programa calcula a média com arredendamento de duas casa após a virgula

const readline = require("readline").createInterface({
    input: process.stdin,
    output: process.stdout,
});

readline.question("Digite a primeira nota: ", (nota1) => {
    readline.question("Digite a segunda nota: ", (nota2) => {
        readline.question("Digite a terceira nota: ", (nota3) => {
            const media = (parseFloat(nota1) + parseFloat(nota2) + parseFloat(nota3)) / 3
            console.log(`Notas \n n1:${nota1}\n n2:${nota2}\n n3:${nota3}\n MÉDIA: ${media.toFixed(2)}`)
            readline.close();
        })
    })
})
