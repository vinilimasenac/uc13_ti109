

// Exemplo 02 - solicitar ao usuário que informe a primeira nota, em seguinda a segunda nota e após isso o programa calcula a média com arredendamento de duas casa após a virgula
const chalk = require("chalk")
const readline = require("readline").createInterface({
    input: process.stdin,
    output: process.stdout,
});

readline.question("Nome do aluno: ", (nome) => {
    readline.question("Digite a primeira nota: ", (nota1) => {
        readline.question("Digite a segunda nota: ", (nota2) => {
            readline.question("Digite a terceira nota: ", (nota3) => {
                const media = (parseFloat(nota1) + parseFloat(nota2) + parseFloat(nota3)) / 3
                console.log(`Notas \n n1:${nota1}\n n2:${nota2}\n n3:${nota3}\n MÉDIA: ${media.toFixed(2)}`)

                if (media >= 7) {
                    console.log(chalk.bgGreen.black(`Aluno(a) ${nome}\n Status: APROVADO!🎇✨🎉 , Sua média foi ${media.toFixed(2)}, 😁Parabéns`))
                } else if (media >= 5 && media < 7) {
                    console.log(chalk.bgYellow.black(`Aluno(a) ${nome}\n Status: RECUPERAÇÃO ⚠  Sua média foi: ${media.toFixed(2)},  Você terá mais uma chance!`))
                } else {
                    console.log(chalk.bgRed.black(`Aluno(a) ${nome}\n Status: REPROVADO💥  Sua média foi: ${media.toFixed(2)}, 😥 Não foi dessa vez`))
                }
                readline.close();
            })
        })
    })
})